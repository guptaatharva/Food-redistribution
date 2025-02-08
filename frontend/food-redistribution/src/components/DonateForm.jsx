import React, { useState } from "react";
import axios from "axios";

const DonateForm = () => {
    const [formData, setFormData] = useState({ restaurant: "", food: "", location: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/api/donations", formData);
        alert(`Matched with: ${response.data.orphanage}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="restaurant" placeholder="Restaurant Name" onChange={handleChange} required />
            <input type="text" name="food" placeholder="Food Items" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <button type="submit">Donate</button>
        </form>
    );
};

export default DonateForm;
