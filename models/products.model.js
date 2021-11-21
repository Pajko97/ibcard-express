const Product = require('../db_models/product')
const Users = require('../db_models/users')

exports.createProduct = (data) => {
    /* let options = {
        setDefaultsOnInsert: true
    } */
    const product = new Product(data)
    return product.save()
}

exports.listProducts = (data) => {
    const products = Product.find({})
    return products
}

exports.findProductByID = (id) => {
    return Product.findById(id).then((result) => {

        return result
    })
}

exports.deleteProductByID = (id) => {
    return Product.findByIdAndRemove(id).then((res) => {
        return res
    })
}