import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ChaTesch',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { pool };
