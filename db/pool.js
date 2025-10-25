// db/pool.js
import dotenv from 'dotenv';
dotenv.config();
import { Pool } from 'pg';

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// export default new Pool({
//   host: process.env.HOST, // or wherever the db is hosted
//   user: process.env.DB_USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: 5432, // The default port
// });
export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Railway
  },
});
