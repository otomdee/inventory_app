const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.POSTGRES_USERNAME,
  database: "top_users",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // The default port
});
