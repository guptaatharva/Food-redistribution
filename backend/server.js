const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const donationRoutes = require("./routes/donations");
const chatbotRoutes = require("./routes/chatbot");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/donations", donationRoutes);
app.use("/api/chatbot", chatbotRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
