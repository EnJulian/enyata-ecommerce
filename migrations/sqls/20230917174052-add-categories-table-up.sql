/* Replace with your SQL commands */
CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW ()
)