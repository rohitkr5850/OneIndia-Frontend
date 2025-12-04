# 🇮🇳 OneIndia – Language Safety Translator (Full MERN Project)

A complete translation platform to help users translate text across major Indian languages with Hinglish support.  
This project includes both **Frontend (React + Vite)** and **Backend (Node.js + Express + MongoDB)**.

---

## 🚀 Live Links
- **Frontend:** https://one-india-frontend.vercel.app  
- **Backend:** https://oneindia-backend.onrender.com  

---

## ✨ Features
- 🔤 Translate between 5 major Indian languages  
  - Hindi, Kannada, Tamil, Telugu, Marathi  
- 🅷 Hinglish transliteration for easy pronunciation  
- ⚡ Fast React UI with Vite  
- 📱 Fully responsive & mobile-friendly  
- 🧩 Saved phrases module  
- 🔒 Secure API connection with backend  
- 🛢️ MongoDB database for storing user phrases  

---

## 🛠️ Tech Stack (Full Project)
### **Frontend**
- React.js  
- Vite  
- JavaScript  
- Tailwind / Custom CSS  
- Axios  
- Vercel Deployment  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- CORS  
- Dotenv  
- Render / Railway Deployment  

---

## 📁 Project Structure
OneIndia/
├── OneIndia-Frontend/
│ ├── src/
│ ├── public/
│ └── vite.config.js
└── OneIndia-Backend/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── config/
├── .env (ignored)
└── server.js

yaml


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Both Repositories
```bash
git clone https://github.com/rohitkr5850/OneIndia-Frontend.git
git clone https://github.com/rohitkr5850/OneIndia-Backend.git
🖥️ Frontend Setup

```bash

cd OneIndia-Frontend
npm install
npm run dev
Runs at:

arduino

http://localhost:5173

🔧 Backend Setup
```bash

cd OneIndia-Backend
npm install
Create .env:

ini

PORT=5000
MONGO_URI=your_mongodb_uri
API_KEY=your_translation_api_key
Start backend:

```bash

npm run dev
Runs at:

arduino

http://localhost:5000
📡 API Endpoints (Backend)
POST /api/translate
Translate text to selected language.

POST /api/hinglish
Convert translated output to Hinglish.

GET /api/phrases
Fetch saved phrases.

POST /api/phrases
Save user phrases.

🗺️ Future Improvements
Add text-to-speech for all languages

Add offline saved-phrases feature

Add user login + personalized phrase library

Add AI-based sentence correction

🤝 Contributing
PRs, issues, and feedback are always welcome!

📜 License
MIT License © 2025 Rohit
