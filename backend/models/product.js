const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productname: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
