const express = require("express");
const axios = require("axios");
const Donation = require("../models/Donation");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5001/match_food", req.body);
        const donation = new Donation(response.data);
        await donation.save();
        res.json(donation);
    } catch (error) {
        res.status(500).json({ error: "Failed to process donation" });
    }
});

router.get("/", async (req, res) => {
    const donations = await Donation.find();
    res.json(donations);
});

module.exports = router;
