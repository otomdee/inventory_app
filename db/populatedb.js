#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS clothing (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  itemname VARCHAR ( 255 ),
  price DECIMAL(10, 2),
  url TEXT
);

INSERT INTO clothing (itemname, price, url) 
VALUES
  ('DRY-EX UV PROTECTION HALF ZIP T-SHIRT', 39.99, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/472019/item/cagoods_00_472019.jpg?width=750')
`;

async function main() {
  console.log("userLog", process.env.POSTGRES_USERNAME);
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
