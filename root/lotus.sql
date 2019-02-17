DROP DATABASE IF EXISTS lotus;
CREATE DATABASE lotus;
\c lotus;

CREATE TABLE customer(
    ID SERIAL PRIMARY KEY,
    Name VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    creditLimit INTEGER,
    balance INTEGER,
    loyaltyCard INTEGER
);

INSERT INTO customer (Name, phone, email, creditLimit, balance, loyaltyCard) VALUES('Anand Singh', '9041259277', 'sanand926@gmail.com', 1500, 0, 1140);

CREATE TABLE supplier(
    ID SERIAL PRIMARY KEY,
    Name VARCHAR,
    phone VARCHAR,
    email VARCHAR
);

INSERT INTO supplier (Name, phone, email) VALUES('Bairn joe', '9041274874', 'sanand926@gmail.com');

CREATE TABLE products(
    ID SERIAL PRIMARY KEY,
    Name VARCHAR,
    price INTEGER,
    added_at DATE NOT NULL DEFAULT NOW()
);

INSERT INTO products (Name, price) VALUES('Mango', 70);