const redis = require('redis');
const client = redis.createClient();

async function getFromCache(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data ? JSON.parse(data) : null);
    });
  });
}

async function saveToCache(key, data) {
  client.setex(key, 3600, JSON.stringify(data)); // Cache for 1 hour
}

module.exports = { getFromCache, saveToCache };