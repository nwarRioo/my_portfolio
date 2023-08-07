import express from "express";
import path from "path";

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

// Serve static files from the 'dist' directory
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "dist")));

// Handle all requests and send 'index.html' for client-side routing
app.get("*", (req, res) => {
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});