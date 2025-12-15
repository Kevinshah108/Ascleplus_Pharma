const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Order = require('../models/Order');

// Middleware
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

// --- AUTH ROUTES ---

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: user.id, name: user.name, email: user.email, isFirstOrder: user.isFirstOrder } });
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
      if (err) throw err;
      // Send extra details (phone, address) if they exist
      res.json({ 
        token, 
        user: { 
            id: user.id, 
            name: user.name, 
            email: user.email, 
            phone: user.phone || '', 
            address: user.address || '',
            isFirstOrder: user.isFirstOrder 
        } 
      });
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete Account
router.delete('/delete', auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ msg: 'User deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// --- NEW USER FEATURES ---
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