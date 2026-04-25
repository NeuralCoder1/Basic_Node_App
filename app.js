const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("Express App is running...");
    res.json({ status: "Express App is running from last 5 days and we not stop it!" });
});

app.get("/health", (req, res) => {
    console.log("Health check hit");
    res.json({ status: "Express health is good and working with full mood..." });
});

app.get("/hello", (req, res) => {
    console.log("Hello endpoint hit");
    console.log(`IP : ${req.headers["x-forwarded-for"] || req.socket.remoteAddress}`);
    res.json({ message: "Hello All!" });
});

app.listen(PORT, () => {
    console.log(`------- Server running on port ${PORT} ---------`);
});
