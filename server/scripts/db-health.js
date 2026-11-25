require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const res = await client.query('SELECT 1 AS ok');
    console.log('Database OK:', res.rows[0]);
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('Database check failed:', err.message);
    process.exit(1);
  }
}

main();
