 const addCategory=`
 INSERT INTO category(
    name
 )
 VALUES ($1) RETURNING category_id, name 
 `;
 const findCategorybyName =`
 SELECT category_id, name FROM category WHERE name = $1
`;

 module.exports={
    addCategory,
    findCategorybyName,
    

}