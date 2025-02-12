# 🍽️ AI-Powered Food Redistribution System(Prototype)

## 📌 Overview
This is a **full-stack web application** designed to **redistribute surplus food** from restaurants to orphanages using AI-powered matching and chatbot assistance.

The system includes:
- **Frontend**: React (Vite)
- **Backend**: Express.js with MongoDB
- **AI Service**: Flask with AI models for matching & chatbot

---

## 🚀 Features
✅ **Food Donation System**: Restaurants can list surplus food for donation.  
✅ **AI Matching**: Uses **Sentence Transformers** to match food donations with orphanages.  
✅ **AI Chatbot**: Provides instant responses to queries related to food donation.  
✅ **Secure Database**: MongoDB stores donation data & matches.

---

## 🛠️ Tech Stack
### **Frontend** (React + Vite)
- React.js
- Vite
- React Router
- Axios (API calls)

### **Backend** (Express.js + MongoDB)
- Express.js
- MongoDB Atlas
- Mongoose (ODM)
- CORS
- dotenv

### **AI Service** (Flask + AI Models)
- Flask
- Sentence Transformers (Matching)
- Transformers (Chatbot)
- Gunicorn (Production server)
- Flask-CORS

---

## 📁 Folder Structure
```
Food-redistribution/
│── backend/
│   │── server.js                # Express API (Donations & Matching)
│   │── config/db.js             # MongoDB Connection
│   │── models/Donation.js       # Mongoose Schema
│   │── routes/donations.js
|   |   |──donations.js          # API Routes for Donations
|   |   |──chatbox.js            # AI Chatbot Route
│   │── ai-services/             # Flask AI Service
│   │   │── app.py               # AI Chatbot & Matching API
│   │── requirements.txt         # Dependencies for Flask
│── frontend/food-redistribution
│   │── src/
│   │   │── components/
│   │   │   │── DonateForm.jsx   # Food Donation Form
│   │   │   │── ChatBox.jsx      # AI Chatbot UI
│   │── App.css                  # UI Styling
│   │── App.jsx
│   │── vite.config.js           # GitHub Pages Config
│── README.md                    # Documentation
│── .gitignore
```

---

## 🔧 Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/Food-redistribution.git
cd Food-redistribution
```

### **2️⃣ Install Dependencies**
#### **Backend (Express.js + MongoDB)**
```sh
cd backend
npm install
```
#### **Frontend (React + Vite)**
```sh
cd ../frontend
npm install
```
#### **AI Service (Flask)**
```sh
cd ../backend/ai-services
pip install -r requirements.txt
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file inside `backend/` and add:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

For Flask AI Service, create `.env` in `backend/ai-services/`:
```sh
FLASK_ENV=production
```

---

## 🏃‍♂️ Running the Application
### **1️⃣ Start Backend (Express.js)**
```sh
cd backend
node server.js
```

### **2️⃣ Start AI Service (Flask)**
```sh
cd backend/ai-services
python app.py
```

### **3️⃣ Start Frontend (React)**
```sh
cd frontend
npm run dev
```
Then visit **`http://localhost:5173`** in your browser.

---



## 🔗 API Endpoints
### **Backend (Express.js)**
| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| GET    | `/donations`           | Get all donations       |
| POST   | `/match_food`          | Match food donation     |
| POST   | `/chatbox`             | AI Chatbot response     |

### **AI Service (Flask)**
| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/chatbot`        | Get AI chatbot response      |

---

## 📞 Contact & Contributions
Feel free to contribute or report issues:
- **GitHub**: [guptaatharva](https://github.com/guptaatharva)
- **Email**: guptaatharva04@gmail.com

