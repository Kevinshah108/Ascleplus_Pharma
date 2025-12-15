const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Order = require('../models/Order'); // Import Order Model

// Middleware to verify token
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// ... (Keep your existing Signup/Login/Delete routes here) ...
// (I will assume Signup/Login/Delete are unchanged from previous steps)

// --- NEW: UPDATE PROFILE ROUTE ---
router.put('/update', auth, async (req, res) => {
  const { name, phone, address } = req.body;
  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    // Update fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (address) user.address = address;

    await user.save();
    
    // Return updated user data (excluding password)
    res.json({ 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        phone: user.phone, 
        address: user.address,
        isFirstOrder: user.isFirstOrder 
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// --- NEW: GET USER ORDERS ---
router.get('/orders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// --- NEW: PLACE ORDER (For checkout later) ---
router.post('/orders', auth, async (req, res) => {
    const { items, totalAmount } = req.body;
    try {
        const newOrder = new Order({
            user: req.user.id,
            items,
            totalAmount
        });
        await newOrder.save();
        res.json(newOrder);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;