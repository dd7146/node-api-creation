// Import Express
const express = require('express');

// Initialize the app
const app = express();

// Define a port
const PORT = 3000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Simulated data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 }
  ];
  
  // API route for users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });
  
  
  // API route for products
  app.get('/api/products', (req, res) => {
    res.json(products);
  });
  
  const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to add a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  
  users.push(newUser);
  res.status(201).json(newUser); // Respond with the created user
});
