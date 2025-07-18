// backend/src/services/userService.js
const User = require('../models/User'); // Assuming you use Mongoose User model

class UserService {
  constructor() {
    // You could inject other dependencies here if needed
  }

  async createUser(userData) {
    const newUser = await User.create(userData);
    return newUser;
  }

  async findUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async updateUser(userId, updateData) {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });
    return updatedUser;
  }

  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
    return null; // Or true/false
  }

  // Add more complex business logic methods here
  // e.g., processPayment(userId, amount), generateReport(params)
}

module.exports = new UserService(); // Export an instance of the service