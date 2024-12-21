#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const dbUrl = process.env.DATABASE_PUBLIC_URL;
const dbName = process.env.PGDATABASE;

const SQL = `
CREATE TABLE IF NOT EXISTS clothing (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  itemname VARCHAR ( 255 ),
  price DECIMAL(10, 2),
  url TEXT
);
`;

async function populateDatabase(query) {
  //create client
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    console.log(`Connecting to database at ${dbUrl}...`);
    await client.connect();
    console.log(`Connected to database: ${dbName}`);
    await client.query(query);
    console.log("Database populated successfully");
  } catch (err) {
    console.error("Error populating database:", err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

if (!dbUrl || !dbName) {
  console.error("Please set DB_URL and DB_NAME in environment.");
  process.exit(1);
}

//populateDatabase();
