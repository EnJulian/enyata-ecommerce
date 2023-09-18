 const {addedCat}= require('../services/category.services')

 const newCat= async(req,res,next)=>{
    try {
        const response= await addedCat(req.body)
        return res.status(response.code).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports={newCat}