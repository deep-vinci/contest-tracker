const express = require("express");
const path = require("path");

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from API!" });
});

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "../", "frontend", "dist")));

// Handle different pages (React handles front-end routing)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
