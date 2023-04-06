require("dotenv").config();
const { Pool } = require("pg");

const connection = new Pool({
  connectionString: process.env.BD_URL,
  ssl: false,
});

module.exports = connection;
