// backend/src/config/index.js
// You might not need to import dotenv here again if it's already in server.js
// But it's good practice to ensure variables are loaded if this file is accessed directly.
// require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  nodeEnv: process.env.NODE_ENV || 'development'
};