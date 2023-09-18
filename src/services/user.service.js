const {addUser,findUserByEmail,fetchUserById}= require('../queries/users')
const {runQuery}=require('../config/database.config')
const config=require('../config/env/index')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

const createUser=async(body)=>{
const {username,email,password}=body
const userExists= await runQuery(findUserByEmail,[email])
 if (userExists.length > 0){
    throw{
        code:409,
        message:'User already exist',
        data:null,
        status:'error'
    }
}

    const saltRounds=12
    const hash= bcrypt.hashSync(password,saltRounds)
    const response = await runQuery(addUser, [username,email,hash])
    return {
        code: 201,
        status: 'success',
        message: 'New user added successfully',
        data: response[0]
    }
 }
 const loginUser = async (body)=>{
 const {email,password}=body;

const user= await runQuery(findUserByEmail, [email]);

if (user.length === 0){
    throw{
            code: 404,
            status: 'error',
            message: 'User not found',
            data: null
    }
}
const { password: dbPassword, id } = user[0];
    
const userPassword = bcrypt.compareSync(password, dbPassword); 

if (!userPassword) {
    console.log(userPassword)
    throw {
        code: 400,
        status: 'error',
        message: 'Wrong username and password combination',
        data: null
    }
}

const options = {
    'expiresIn': '1d'
}

// Generate the token for authentication purposes
const token = jwt.sign({
    id,
    email},
     config.JWT_SECRET_KEY, options);
return {
    status: 'success',
    message: 'User login successfully',
    code: 200,
    data: {
        id,
        email,
        token
    }
  }
 }

 module.exports={
    createUser,
    loginUser
 }
