# Product CRUD API

A complete RESTful API for managing products built with Node.js, Express, and MongoDB using MVC architecture.

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations for products
- ✅ MongoDB integration with Mongoose ODM
- ✅ MVC Architecture (Model-View-Controller)
- ✅ Separated Routes and Controllers
- ✅ Input validation and error handling
- ✅ RESTful API design
- ✅ CORS enabled for cross-origin requests
- ✅ Environment configuration
- ✅ Global error handling middleware

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd productcruf
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `config.env` and update the MongoDB connection string
   - For local MongoDB: `mongodb://localhost:27017/productcruf`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/productcruf`

4. Start the server:
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## Project Structure

```
productcruf/
├── controllers/
│   └── productController.js    # Product CRUD operations
├── middleware/
│   └── errorHandler.js         # Global error handling
├── models/
│   └── Product.js              # Product schema and model
├── routes/
│   ├── index.js                # Main routes index
│   └── productRoutes.js        # Product routes
├── server.js                   # Main server file
├── package.json                # Dependencies and scripts
├── config.env                  # Environment variables
└── README.md                   # This file
```

## API Endpoints

### Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |
| GET | `/health` | Health check |

### Product Schema

```javascript
{
  name: String (required, max 100 chars),
  price: Number (required, min 0),
  description: String (required, max 500 chars),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## API Usage Examples

### 1. Get All Products
```bash
curl -X GET http://localhost:3000/api/products
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "name": "Laptop",
      "price": 999.99,
      "description": "High-performance laptop",
      "createdAt": "2023-09-01T10:00:00.000Z",
      "updatedAt": "2023-09-01T10:00:00.000Z"
    }
  ]
}
```

### 2. Create New Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone",
    "price": 599.99,
    "description": "Latest smartphone model"
  }'
```

### 3. Get Single Product
```bash
curl -X GET http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1
```

### 4. Update Product
```bash
curl -X PUT http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 549.99
  }'
```

### 5. Delete Product
```bash
curl -X DELETE http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1
```

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## MVC Architecture

### Controllers (`controllers/productController.js`)
- Contains all business logic for CRUD operations
- Handles request/response logic
- Implements proper error handling

### Routes (`routes/productRoutes.js`)
- Defines API endpoints
- Maps HTTP methods to controller functions
- Clean and organized routing structure

### Models (`models/Product.js`)
- Defines data schema and validation
- Handles database interactions
- Includes timestamps and field validation

### Middleware (`middleware/errorHandler.js`)
- Global error handling
- Consistent error response format
- Development vs production error details

## Testing with Postman

1. Import the following collection into Postman:

```json
{
  "info": {
    "name": "Product CRUD API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Products",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/api/products"
      }
    },
    {
      "name": "Create Product",
      "request": {
        "method": "POST",
        "url": "http://localhost:3000/api/products",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Test Product\",\n  \"price\": 99.99,\n  \"description\": \"Test description\"\n}"
        }
      }
    }
  ]
}
```

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## Production

For production deployment:
1. Set `NODE_ENV=production` in your environment
2. Use a production MongoDB instance
3. Configure proper CORS settings
4. Set up environment variables securely

## License

MIT License # productsapi
