import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DonateForm from "./components/DonateForm";
import Chatbox from "./components/ChatBox";
import "./App.css"

const App = () => {
    return (
        <Router>
            <div>
                <h1>🍽️ AI-Powered Food Redistribution System</h1>
                <nav>
                    <ul>
                        <li><Link to="/donate">Donate Food</Link></li>
                        <li><Link to="/chatbot">Chat with AI</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/donate" element={<DonateForm />} />
                    <Route path="/chatbot" element={<Chatbox />} />
                    <Route path="/" element={<h2>Welcome! Choose an option from the menu.</h2>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
