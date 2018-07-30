DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INTEGER(5) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM products;