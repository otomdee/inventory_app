const menQuery = `
INSERT INTO clothing (itemname, price, url) 
VALUES
('BROADCLOTH LONG SLEEVE SHIRT', 49.99, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/470304/sub/cagoods_470304_sub1.jpg?width=750'),
('COTTON T-SHIRT', 24.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/422992/item/cagoods_02_422992_3x4.jpg?width=423'),
('MERINO CREW NECK SWEATER', 49.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/450535/item/cagoods_57_450535_3x4.jpg?width=423'),
('CASHMERE CREW NECK SWEATER', 129.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/450543/item/cagoods_07_450543_3x4.jpg?width=423'),
('SWEAT WIDE PANTS', 49.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/471809/item/cagoods_09_471809_3x4.jpg?width=423');
`;
const womenQuery = `
INSERT INTO clothing (itemname, price, url) 
VALUES
('SEAMLESS DOWN PARKA', 179.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/469896/item/cagoods_01_469896_3x4.jpg?width=423'),
('MERINO RIBBED CREW NECK SWEATER HALF SLEEVE', 39.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/471596/item/cagoods_51_471596_3x4.jpg?width=423'),
('LAMBSWOOL CREW NECK SWEATER', 39.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/472906/item/cagoods_08_472906_3x4.jpg?width=423'),
('FLEECE CARDIGAN',39.90,'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/474871/item/cagoods_30_474871_3x4.jpg?width=423'),
('JERSEY RELAXED JACKET', 59.90,'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/469775/item/cagoods_11_469775_3x4.jpg?width=423');
`;

const kidsQuery = `
INSERT INTO clothing (itemname, price, url) 
VALUES
('SPONGEBOB SQUAREPANTS CACTUS PLANT FLEA MARKET SWEAT HOODIE', 34.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/475423/item/cagoods_03_475423_3x4.jpg?width=423'),
('SPONGEBOB SQUAREPANTS CACTUS PLANT FLEA MARKET UT', 19.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/477227/item/cagoods_56_477227_3x4.jpg?width=423'),
('DRY SWEAT MINI SKORT', 24.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/475537/item/cagoods_01_475537_3x4.jpg?width=423'),
('FLEECE FULL-ZIP JACKET', 34.90, 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/473354/sub/goods_473354_sub11_3x4.jpg?width=423'),
('FLEECE CARDIGAN', 19.90, 'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/472084/item/cagoods_30_472084_3x4.jpg?width=423');
`;

module.exports = { menQuery, womenQuery, kidsQuery };
