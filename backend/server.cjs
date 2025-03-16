const express = require("express");
const path = require("path");
// const jwtDecode = require("jwt-decode");

const app = express();

app.use(express.json());

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
