const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({ exteded: false }));

app.use(cors());

const productRoutes = require("./routers/products");

app.use(productRoutes);

sequelize
  .sync()
  .then()
  .catch((err) => console.log(err));

app.listen(3000);
