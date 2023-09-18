const addProduct=`
INSERT INTO products(
    name,
    price,
    quantity
)VALUES($1,$2,$3) RETURNING product_id, name, price,quantity
`
const findProductbyName =`
 SELECT product_id, name,price, quantity FROM products WHERE name = $1
`;

const updateProduct = `
  UPDATE products
  SET sold = $1
  WHERE product_id = $2
`;

const fetchAllProducts = `
 SELECT
  p.product_id,
  p.name AS product_name,
  p.price,
  p.quantity_sold,
  p.quantity,
  c.name AS category_name
FROM
  products p
INNER JOIN
  category c ON p.category_id = c.category_id
  `;


module.exports={
    addProduct,
    findProductbyName,
    fetchAllProducts,
    updateProduct
    
}
