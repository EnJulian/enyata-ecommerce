const express = require('express');
const api = express.Router()
// const books = require('../../routes/book')
const users = require('../../routes/user')
const newCat= require('../../routes/category')
const newProduct= require('../../routes/product')
const retrieveAllProducts = require('../../routes/product')

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to My Products API'
}))
api.use("/users", users);
api.use("/category" ,newCat)
api.use("/product",newProduct)
api.use("/all", retrieveAllProducts)

module.exports = api
