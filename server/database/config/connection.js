require("dotenv").config();
const { Pool } = require("pg");

let dbUrl = "";
let ssl = false;

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === "production") {
  dbUrl = process.env.DB_URL;
  ssl = true;
} else if (nodeEnv === "development") {
  dbUrl = process.env.DEV_BD_URL;
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl,
});

module.exports = connection;
