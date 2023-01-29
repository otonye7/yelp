-- list database =  \l

-- Create Database = CREATE DATABASE databasename 

-- \c is to connect to a database.

-- \d is to list out all the tables in a database

-- \d products to list out all the data in a specific table

-- to view all the data in a table you use select

-- drop table name 



CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) values (1, 'mcdonalds', 'new york', 5);

select * from restaurants;