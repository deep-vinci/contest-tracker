const express = require("express");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// const jwtDecode = require("jwt-decode");

const app = express();

app.use(express.json());

app.post("/api/userinfo", async (req, res) => {
    // check if user exists
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", req.body.data.email);

    if (error) throw error;

    // if user is found, send a cookie save cookie in db otherwise create user and then send cookie and then save cookie in db
    if (data.length > 0) {
        const userJWT = req.body.jwt.credential;

        res.cookie("session", userJWT, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 60 * 1000,
        });
        return res.json({ message: "Login successful" });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
    // console.log(data.length > 0 ? : null);

    res.json({ message: "Hello from API!" });
});

app.get("/g_auth", (req, res) => {
    console.log(req.body);
    res.json({ message: "Hello from API!" });
});

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../", "frontend", "dist")));

// Handle different pages (React handles front-end routing)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
