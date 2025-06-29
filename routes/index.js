const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');

// Mount routes
router.use('/products', productRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Product CRUD API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router; 