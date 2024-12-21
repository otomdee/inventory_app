const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRoute.js");
const childrenRouter = require("./routes/childrenRoute.js");
const menRouter = require("./routes/menRoute.js");
const womenRouter = require("./routes/womenRoute.js");

const app = express();

//set ejs and url
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//set static(css, images)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//routes
app.use("/", indexRouter);
app.use("/children", childrenRouter);
app.use("/men", menRouter);
app.use("/women", womenRouter);

//start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening`));
