const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
    restaurant: String,
    food: String,
    location: String,
    orphanage: String,
    orphanage_location: String,
    match_score: Number
});

module.exports = mongoose.model("Donation", DonationSchema);
