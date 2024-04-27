const logger = require('../logger');

function apiKeyInjector(req, res, next) {
  if (req.path.startsWith('/api/secure')) {
    req.apiKey = process.env.WELLS_FARGO_API_KEY;
    logger.info(`API Key accessed for route: ${req.path}`);
  }
  next();
}

  module.exports = apiKeyInjector;