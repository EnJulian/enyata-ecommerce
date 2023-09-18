const express=require('express')


const router= express.Router()

const {newProduct, retrieveAllProducts}=require('../controllers/product.controller')

const {checkToken}=require('../middlewares/auth.middleware')

router.post('/newProduct',checkToken, newProduct)
router.get('/products', retrieveAllProducts);

module.exports=router
