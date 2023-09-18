/* Replace with your SQL commands */
UPDATE products IF NOT EXISTS products(
SET sold BOOLEAN DEFAULT false
)
