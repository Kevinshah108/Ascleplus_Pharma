const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- 1. MIDDLEWARE ---
// Allow React to talk to this server (CORS)
app.use(cors({
  origin: ["https://ascleplus-pharma.vercel.app", "http://localhost:5173"], // Allow both Live & Local
  credentials: true
}));
app.use(express.json());

// Request Logger (Shows you what is happening in the terminal)
app.use((req, res, next) => {
  console.log(`📡 Request Received: ${req.method} ${req.url}`);
  next();
});

// --- 2. DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ DB Connection Error:', err));

// --- 3. ROUTES (CRITICAL PART) ---
// This connects your auth.js file
app.use('/api/auth', require('./routes/auth'));

// This connects your products.js file (THIS WAS LIKELY MISSING)
app.use('/api/products', require('./routes/products'));

// --- 4. START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));