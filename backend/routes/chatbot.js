const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5001/chatbot", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error communicating with AI chatbot:", error);
        res.status(500).json({ error: "Failed to process chatbot request" });
    }
});

module.exports = router;