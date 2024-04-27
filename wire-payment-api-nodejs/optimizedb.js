const { Pool } = require('pg');

const pool = new Pool({
  // Database connection configuration
});

async function optimizedQuery() {
  const result = await pool.query('SELECT * FROM payments WHERE processed = FALSE AND retry_count < 5');
  return result.rows;
}

module.exports = { optimizedQuery };