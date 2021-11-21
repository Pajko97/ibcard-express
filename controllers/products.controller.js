
const ProductsModel = require('../models/products.model')


exports.insertProduct = (req, res, err) => {
    ProductsModel.createProduct(req.body)
        .then((result) => {
            res.status(200).send(result)
        }).catch(err)
}

exports.fetchProduct = (req, res, err) => {
    console.log(typeof req.params.id)
    ProductsModel.findOne({ _id: req.params.id })
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.fetchProducts = (req, res, err) => {
    ProductsModel.listProducts()
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.deleteProduct = (req, res, err) => {
    ProductsModel.deleteProductByID(req.params.product_id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

