const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const productModel = require('../models/product');
const { verifyProductExists } = require('../middlewares/route.middleware');


const controller = new ProductController(productModel);

router.get('/', controller.getAll);

router.get('/export/json', controller.exportJSON);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id', verifyProductExists, controller.update);

router.delete('/:id', verifyProductExists, controller.remove);

module.exports = router;