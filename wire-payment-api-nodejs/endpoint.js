const { getFromCache, saveToCache } = require('./cache');
const { optimizedQuery } = require('./database');

app.get('/fetch-payments', async (req, res) => {
  let payments = await getFromCache('payments');
  if (!payments) {
    payments = await optimizedQuery();
    await saveToCache('payments', payments);
  }
  res.json(payments);
});