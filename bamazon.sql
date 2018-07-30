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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Smash Up: Core Set', 'Boardgames', 39.95, 2), 
('Smash Up: Obligatory Chtullu Expansion', 'Boardgames', 19.95, 3), 
('Battle for Rokugan', 'Boardgames', 59.95, 1), 
('Formula De', 'Boardgames', 79.95, 4), 
('Magic the Gathering: Base set starter', 'CCG', 15.99, 15), 
('Masion of Madness', 'Boardgames', 99.95, 2);
USE bamazondb;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Dungeons & Dragons: Xanathars Guide to Everthing', 'RPG', 59.95, 3),
('Game of Thrones: Core Set', 'LCG', 39.95, 1), 
('Legends of the Five Rings: Phoenix Expansion', 'LCG', 24.95, 2), 
('Legends of the Five Rings: Tainted Lands Expansion', 'LCG', 14.95, 6), 
('Legends of the Five Rings: Core Set', 'LCG', 49.95, 3), 
('Dungeons & Dragons: Players Handbook', 'RPG', 59.95, 4),
('Dungeons & Dragons: Dungeons Master Guide', 'RPG', 59.95, 2);



SET SQL_SAFE_UPDATES = 0;
DELETE FROM products;

ALTER TABLE products
MODIFY price DECIMAL NOT NULL;
  