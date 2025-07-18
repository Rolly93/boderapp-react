// backend/src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController'); // Import user controller
const authMiddleware = require('../middlewares/authMiddleware'); // Import auth middleware

const router = express.Router();

// Public routes (no authentication needed)
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Protected routes (authentication required)
// All routes below this line will use authMiddleware.protect
router.use(authMiddleware.protect);

router.get('/me', userController.getMe); // Get current authenticated user's profile
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

module.exports = router;