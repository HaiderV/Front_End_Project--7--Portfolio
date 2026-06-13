const { GoogleGenerativeAI } = require("@google/generative-ai");
const context = require("./context");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.get("/chat", (req, res) => {
    res.send("Chat route exists");
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const prompt = `${context} User: ${message}`;

        const result = await model.generateContent(prompt);

        const reply = result.response.text();

        res.json({ reply });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            reply: "Something went wrong."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});