import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Chatbox = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = async () => {
        if (!message.trim()) return;
        try {
            const res = await axios.post("http://localhost:5000/api/chatbot", { message });
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            setResponse("Error connecting to AI chatbot.");
        }
    };

    return (
        <div>
            <h2>🤖 AI Chatbot</h2>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Ask a question..." 
            />
            <button onClick={handleSend}>Send</button>
            {response && <p><strong>AI:</strong> {response}</p>}
        </div>
    );
};

export default Chatbox;