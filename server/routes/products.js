const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// 1. GET ALL PRODUCTS (Public)
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// 2. ADD A PRODUCT (Admin Feature)
// Send POST request to http://localhost:5000/api/products
/*
  Body: {
    "name": "New Medicine",
    "category": "Wellness",
    "price": 100,
    "image": "image_url_here",
    "rating": 4.5
  }
*/
router.post('/', async (req, res) => {
    const { name, category, price, image, rating } = req.body;
    try {
        const newProduct = new Product({ name, category, price, image, rating });
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// 3. EDIT A PRODUCT
// Send PUT request to http://localhost:5000/api/products/:id
router.put('/:id', async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        // Update fields if provided
        const { name, category, price, image, rating } = req.body;
        if (name) product.name = name;
        if (category) product.category = category;
        if (price) product.price = price;
        if (image) product.image = image;
        if (rating) product.rating = rating;

        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// 4. DELETE A PRODUCT
// Send DELETE request to http://localhost:5000/api/products/:id
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// 5. SEED ROUTE (Keep this for reset)
router.post('/seed', async (req, res) => {
    try {
        await Product.deleteMany({}); 
        const sampleProducts = [
            { name: 'Paracetamol 500mg', category: 'Pain Relief', price: 30, rating: 4.5, image: 'https://placehold.co/200/e2e8f0/1e293b?text=Paracetamol' },
            { name: 'Vitamin C Serum', category: 'Skincare', price: 450, rating: 4.8, image: 'https://placehold.co/200/e2e8f0/1e293b?text=Vitamin+C' },
            { name: 'Whey Protein', category: 'Fitness', price: 2500, rating: 4.9, image: 'https://placehold.co/200/e2e8f0/1e293b?text=Whey' },
            { name: 'N95 Mask', category: 'Protection', price: 50, rating: 4.6, image: 'https://placehold.co/200/e2e8f0/1e293b?text=Mask' },
            { name: 'Digene Syrup', category: 'Wellness', price: 120, rating: 4.7, image: 'https://placehold.co/200/e2e8f0/1e293b?text=Digene' }
        ];
        await Product.insertMany(sampleProducts);
        res.json({ msg: "Products Added" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;