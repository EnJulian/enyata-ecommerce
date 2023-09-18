const {addCategory,findCategorybyName} =require('../queries/category')
const {runQuery}=require('../config/database.config')

const addedCat = async (body) => {
    const {name} = body
    const categoryExist= await runQuery (findCategorybyName,[name])
    if (categoryExist.length > 0){
        // console.log(category)
        throw{
            code:409,
            message:'category already exist',
            data:null,
            status:'error'
        }
    } 
    const response = await runQuery(addCategory, [name])
    return {
        code: 201,
        status: 'success',
        message: 'New category added successfully',
        data:response
    }
}


module.exports={
    addedCat
}