# Wire Payment API Node.js

## Overview

This API interfaces with the Wells Fargo Gateway API to process wire payments.

## Setup

- Install dependencies: `npm install`
- Set environment variables in `.env` file:
  - `WELLS_FARGO_API_KEY`: Your API key for Wells Fargo

## API Endpoints

### POST /wire-payment

- **Description**: Sends a wire payment request to Wells Fargo.
- **Request Body**:
  - `destinationAccount`: string (required)
  - `amount`: number (required)
  - `currency`: string (required)
- **Responses**:
  - `200 OK`: Payment processed successfully.
  - `400 Bad Request`: Validation error with input data.
  - `500 Internal Server Error`: Issues with processing the request.

## Testing

Run tests using: `npm test`
