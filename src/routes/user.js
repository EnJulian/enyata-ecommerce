const express=require('express')

const router= express.Router()
const {newUser,signInUser}=require('../controllers/user.controller')

router.post('/signUp', newUser)
router.post('/login', signInUser)

module.exports=router