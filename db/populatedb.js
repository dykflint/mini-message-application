#! /usr/bin/env Node
// db/populatedb.js
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR ( 255 ), username VARCHAR (50), added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (text, username)
VALUES
  ('Hi There', 'Bryan'),
  ('How are you?', 'Odin'),
  ('What are your plans for today?' ,'Damon');
`;

async function main() {
  console.log('sending...');
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:5432/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
