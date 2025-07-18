// backend/server.js
require('dotenv').config(); // Load environment variables from .env

const app = require('./src/app'); // Import your Express application from src/app.js
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Access backend API at http://localhost:${PORT}`);
});