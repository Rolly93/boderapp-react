// backend/src/utils/appError.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Call parent constructor (Error)

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Mark as operational error (can be sent to client)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;