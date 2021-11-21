const OrdersModel = require('../models/orders.model')
const Orders = require('../db_models/orders')



exports.createOrder = (req, res, err) => {
    OrdersModel.insertOrder(req.body)
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.deleteOrder = (req, res, err) => {
    OrdersModel.deleteOrderByID(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.updateOrder = (req, res, err) => {
    OrdersModel.updateOrder(req.body)
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.fetchOrders = (req, res, err) => {
    OrdersModel.listOrders()
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}

exports.fetchOrder = (req, res, err) => {
    OrdersModel.findOrderByID(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err)
}


