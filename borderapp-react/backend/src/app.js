// backend/src/app.js
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const config = require('./config'); // Import your config settings
const errorHandler = require('./middlewares/errorHandler'); // Import error handler middleware

// Import routes
const userRoutes = require('./routes/userRoutes');

const app = express();

// --- Global Middlewares ---
// Enable CORS for your frontend application
app.use(cors({
  origin: config.frontendUrl, // Dynamically get frontend URL from config
  credentials: true // If you're using cookies/sessions
}));

// Body parser: parses incoming JSON requests
app.use(express.json());

// Body parser: parses incoming URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
// Basic test route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Backend API!');
});

// Mount user routes
app.use('/api/users', userRoutes); // All routes in userRoutes will be prefixed with /api/users

// --- Error Handling Middleware ---
// This must be the last middleware added!
app.use(errorHandler);

module.exports = app; // Export the configured Express app