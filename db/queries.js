const { Pool } = require("pg");
require("dotenv").config();

const dbPool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
});

async function getAllClothes() {
  const { rows } = await dbPool.query("SELECT * FROM clothing ORDER BY id;");
  return rows;
}

async function getMen() {
  const { rows } = await dbPool.query(`SELECT itemname, price, url
    FROM clothing
    JOIN men ON clothing.id = men.clothes_id;`);

  return rows;
}

async function getWomen() {
  const { rows } = await dbPool.query(`SELECT itemname, price, url
    FROM clothing
    JOIN women ON clothing.id = women.clothes_id;`);

  return rows;
}

async function getKids() {
  const { rows } = await dbPool.query(`SELECT itemname, price, url
    FROM clothing
    JOIN kids ON clothing.id = kids.clothes_id;`);

  return rows;
}

module.exports = { getAllClothes, getMen, getWomen, getKids };
