// backend/src/controllers/userController.js
const User = require('../models/User'); // Import the User model
const catchAsync = require('../utils/catchAsync'); // Helper for async error handling
const AppError = require('../utils/appError'); // Custom error class
const jwt = require('jsonwebtoken'); // Assuming you've installed jsonwebtoken: npm install jsonwebtoken
const config = require('../config');

// Helper function to send JWT token
const signToken = id => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Remove password from output (if not already handled by schema select: false)
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

// --- User Controller Functions ---

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password'); // Select password explicitly

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password!', 401));
  }

  // 3) If everything is ok, send token to client
  createSendToken(user, 200, res);
});

exports.getMe = (req, res, next) => {
  // req.user is set by the protect middleware
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user
    }
  });
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password) {
    return next(new AppError('This route is not for password updates. Please use /updateMyPassword.', 400));
  }

  // 2) Filtered out unwanted field names that are not allowed to be updated
  const filteredBody = { ...req.body };
  delete filteredBody.password; // Ensure password isn't updated here

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true, // Return the updated document
    runValidators: true // Run schema validators
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  // In a real app, you might just deactivate the user instead of deleting
  await User.findByIdAndDelete(req.user.id);

  res.status(204).json({
    status: 'success',
    data: null
  });
});