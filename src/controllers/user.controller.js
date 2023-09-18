const {createUser, loginUser}=require('../services/user.service')


const newUser= async(req,res,next)=>{
    try {
        const response= await createUser(req.body)
        return res.status(response.code).json(response)
    } catch (error) {
        next(error) 
    }
}

const signInUser = async (req, res, next) => {
    try {
        const result = await loginUser(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}
module.exports={
    newUser,
    signInUser
}