// db/queries.js
import pool from './pool.js';

export async function queryGetMessages(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table}`);
  return rows;
}

export async function insertNewMessage(text, username) {
  await pool.query(`INSERT INTO messages (text, username) VALUES ($1, $2)`, [text, username]);
}
