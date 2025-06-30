const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes.js');
require('dotenv').config({ path: './config.env' });

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database!");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => {
    console.log("Connection failed!", err);
});

// Mount API routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Product CRUD API',
    version: '1.0.0',
    endpoints: {
      'GET /api/products': 'Get all products',
      'GET /api/products/:id': 'Get single product',
      'POST /api/products': 'Create new product',
      'PUT /api/products/:id': 'Update product',
      'DELETE /api/products/:id': 'Delete product',
      'GET /api/health': 'Health check'
    },
    documentation: 'Check README.md for detailed API documentation'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 API Documentation available at http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
}); 