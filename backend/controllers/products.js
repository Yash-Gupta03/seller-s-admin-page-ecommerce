const Product = require("../models/product");

exports.addProduct = async (req, res, next) => {
  try {
    const productname = req.body.productname;
    const price = req.body.price;
    const category = req.body.category;

    const data = await Product.create({
      productname: productname,
      price: price,
      category: category,
    });
    res.json({ newProductDetail: data });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const data = await Product.findAll();
    res.status(200).json({ allProducts: data });
    console.log(data);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

exports.deleteProduct = async (req, res, next) => {
  const data = await Product.destroy({
    where: {
      id: req.params.productId,
    },
  });
  res.status(200).json({ data: data });
};
