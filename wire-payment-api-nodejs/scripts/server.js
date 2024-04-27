const logger = require('./logger');

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Existing server setup continues...

const express = require('express');
const { errorHandler } = require('./errorHandler');

const app = express();
app.use(express.json());

// Include your routes
const paymentRoutes = require('./endpoint');
app.use(paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  errorHandler.handleError(err).then(() => {
    const status = err.statusCode || 500;
    res.status(status).json({ error: err.message });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});