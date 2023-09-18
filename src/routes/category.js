const express= require('express')
const router= express.Router()
const {newCat}= require('../controllers/category.controller')


router.post('/create', newCat)

module.exports=router