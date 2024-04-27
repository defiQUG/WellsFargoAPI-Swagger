class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = name;
      this.statusCode = statusCode;
      this.isOperational = isOperational;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class APIError extends BaseError {
    constructor(name, statusCode = 500, isOperational = true, description = 'Internal Server Error') {
      super(name, statusCode, isOperational, description);
    }
  }
  
  class NotFoundError extends BaseError {
    constructor(description = 'Not Found') {
      super('NotFoundError', 404, true, description);
    }
  }
  
  module.exports = {
    APIError,
    NotFoundError
  };