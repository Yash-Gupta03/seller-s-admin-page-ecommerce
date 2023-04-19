const express = require("express");

const productController = require("../controllers/products");

const router = express.Router();

router.use("/add-product", productController.addProduct);

router.use("/get-products", productController.getProduct);

router.use("/delete-product/:productId", productController.deleteProduct);

module.exports = router;
