const productModel = require('../models/product');

const verifyProductExists = (req, res, next) => {
const { id } = req.params;
const product = productModel.getById(id);
if (!product) {
return res.status(404).json({ message: `Product with id ${id} not found` });
}

req.product = product;
next();
};


module.exports = { verifyProductExists };