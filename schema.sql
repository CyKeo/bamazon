DROP DATABASE IF EXISTS
bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	price INT NOT NULL,
	quantitiy INT
);

INSERT INTO products (name, price, quantitiy) VALUES ("Yamsung 50in led", 100, 100) 

INSERT INTO products (name, price, quantitiy) VALUES ("Sphero Gaming console", 300, 150)

INSERT INTO products (name, price, quantitiy) VALUES ("Awake Coffee Brewer" 50, 200)

INSERT INTO products (name, price, quantitiy) VALUES ("Boom Ultimate Sound Bar", 90, 50)

INSERT INTO products (name, price, quantitiy) VALUES ("Bbuds a Bamazon exlcusive earbud", 80, 1000)

INSERT INTO products (name, price, quantitiy) VALUES ("Morgan Crows 100pc kitchen set", 400, 250)

INSERT INTO products (name, price, quantitiy) VALUES ("Detos nacho cheese chips", 3, 400)

INSERT INTO products (name, price, quantitiy) VALUES ("Bepis cola drink", 2, 0)

INSERT INTO products (name, price, quantitiy) VALUES ("Revengers 1 blueray", 20, 30)

INSERT INTO products (name, price, quantitiy) VALUES ("SOUP Mens TEE", 10 ,54) 

INSERT INTO products (name, price, quantitiy) VALUES ("SOUP Snapback", 15 ,13) 

INSERT INTO products (name, price, quantitiy) VALUES ("SOUP BackPack", 35 ,89) 