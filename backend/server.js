const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// API route
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend API" });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});