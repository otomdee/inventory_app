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
  const { rows } = await dbPool.query(`SELECT *
    FROM clothing
    JOIN men ON clothing.id = men.clothes_id;`);

  return rows;
}

async function getWomen() {
  const { rows } = await dbPool.query(`SELECT *
    FROM clothing
    JOIN women ON clothing.id = women.clothes_id;`);

  return rows;
}

async function getKids() {
  const { rows } = await dbPool.query(`SELECT *
    FROM clothing
    JOIN kids ON clothing.id = kids.clothes_id;`);

  return rows;
}

async function getItem(id) {
  const { rows } = await dbPool.query(
    `
    SELECT *
    FROM clothing
    WHERE id = ${id};
    `
  );

  return rows;
}

async function createItem(itemObj) {
  await dbPool.query(
    `
    INSERT INTO clothing (itemname, price, url) 
    VALUES 
    ('${itemObj.itemname}', ${itemObj.price}, '${itemObj.url}');
    `
  );

  const { rows } = await dbPool.query(
    `
    SELECT id FROM clothing WHERE itemname = '${itemObj.itemname}';`
  );

  console.log(rows[0].id);

  dbPool.query(
    `
    INSERT INTO ${itemObj.category} (clothes_id)
    VALUES
    (${rows[0].id});
    `
  );
}

module.exports = {
  getAllClothes,
  getMen,
  getWomen,
  getKids,
  getItem,
  createItem,
};
