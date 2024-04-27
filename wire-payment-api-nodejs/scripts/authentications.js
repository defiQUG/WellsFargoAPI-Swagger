'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authCodes = new Set();
const accessTokens = new Set();

// Endpoint to generate an auth code
app.post('/code', (req, res) => {
  const authCode = Array.from({length: 10}, () => Math.floor(Math.random() * 10)).join('');
  authCodes.add(authCode);
  res.redirect(`http://localhost:3000/oauth-callback.html?code=${authCode}`);
});

// Endpoint to exchange an auth code for an access token
app.post('/token', (req, res) => {
  const { code } = req.body;
  if (authCodes.has(code)) {
    const token = Array.from({length: 50}, () => Math.floor(Math.random() * 10)).join('');
    authCodes.delete(code);
    accessTokens.add(token);
    res.json({ 'access_token': token, 'expires_in': 3600 });
  } else {
    res.status(400).json({ message: 'Invalid auth code' });
  }
});

// Secure endpoint that requires a valid access token
app.get('/secure', (req, res) => {
  const { authorization } = req.headers;
  if (accessTokens.has(authorization)) {
    res.json({ message: 'Access granted' });
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
});

const PORT = process.env.AUTH_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}`);
});