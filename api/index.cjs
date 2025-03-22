const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { createClient } = require("@supabase/supabase-js");
const { verify } = require("crypto");
const port = process.env.PORT || 8000;
const {
    fetchCodeforcesContests,
    fetchLeetcodeContests,
    fetchCodechefContests,
} = require("./contestFetchers");

require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// const jwtDecode = require("jwt-decode");

const app = express();

app.use(express.json());
app.use(cookieParser());

const maxAge = 60 * 60 * 1000;
const expireAt = new Date(new Date().getTime() + maxAge);

async function verifyUser(req, res, next) {
    try {
        const { session } = req.cookies;

        if (!session) {
            return res.status(401).json({ message: "Invalid session" });
        }

        // Verify the session token
        const { data, error } = await supabase
            .from("session_table")
            .select("*")
            .eq("session", session);

        if (error) throw error;
        req.user = {
            ...data,
        };

        next();
    } catch (error) {
        console.error("Error during session verification:", error.message);
    }
}

// * manage auto login by verifying if session is valid
app.get("/api/auth/session", verifyUser, async (req, res) => {
    // ! fetch the user with email from req.user

    // console.log(req.user[0]);
    const { data: user, error } = await supabase
        .from("users")
        .select("username, email, picture")
        .eq("email", req.user[0].email);

    if (error) throw error;

    // console.log(req.user[0].email, { data });
    res.json({ user });
});

// * sign-up sign-in route.
// this route basically is allinone, handles signup if new user
// enters the email, pass. handles login if already existing user
// enters the email, pass. It also sends session as cookie to db
// for user verification.
app.post("/api/auth/signup-or-login", async (req, res) => {
    try {
        const { email, name, sub, picture } = req.body.data;
        const userJWT = req.body.jwt?.credential;
        if (!email || !userJWT) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Set session cookie options
        const cookieOptions = {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: maxAge,
        };

        // Check if user exists
        const { data: users, error: userFetchError } = await supabase
            .from("users")
            .select("*")
            .eq("email", email);

        if (userFetchError) {
            console.error("Error fetching user:", userFetchError);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // If user exists, store session
        if (users.length > 0) {
            res.cookie("session", userJWT, cookieOptions);

            const { error: sessionError } = await supabase
                .from("session_table")
                .insert([{ email, session: userJWT, expire_at: expireAt }]);

            if (sessionError) {
                console.error("Error saving session:", sessionError);
                return res
                    .status(500)
                    .json({ error: "Failed to save session" });
            }

            return res.json({ message: "Login successful" });
        }

        // If user doesn't exist, create user
        const { error: userInsertError } = await supabase
            .from("users")
            .insert([{ email, username: name, google_id: sub, picture }]);

        if (userInsertError) {
            console.error("Error creating user:", userInsertError);
            return res.status(500).json({ error: "Failed to create user" });
        }

        // Store session
        const { error: sessionInsertError } = await supabase
            .from("session_table")
            .insert([{ email, session: userJWT, expire_at: expireAt }]);

        if (sessionInsertError) {
            console.error("Error saving session:", sessionInsertError);
            return res.status(500).json({ error: "Failed to save session" });
        }

        res.cookie("session", userJWT, cookieOptions);
        return res.json({ message: "User created and logged in" });
    } catch (err) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/contests", async (req, res) => {
    try {
        const [codeforces, leetcode, codechef] = await Promise.all([
            fetchCodeforcesContests(),
            fetchLeetcodeContests(),
            fetchCodechefContests(),
        ]);
        const allContests = [...codeforces, ...leetcode, ...codechef].sort(
            (a, b) => a.startTimeUnix - b.startTimeUnix
        );
        res.json({
            status: "success",
            count: allContests.length,
            data: allContests,
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../", "frontend", "dist")));

// Handle different pages (React handles front-end routing)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"));
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
