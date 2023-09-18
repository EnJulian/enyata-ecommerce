/* Replace with your SQL commands */
CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE,
    price DECIMAL(10,2)NOT NULL,
    quantity_sold INT DEFAULT 0,
    quantity INT NOT NULL,
    category_id INT REFERENCES category(category_id)
)
