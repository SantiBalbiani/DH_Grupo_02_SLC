# Proyecto Integrador de Digital House

Grupo 02 | Santiago Balbiani - Luciano Schiavone - Clara Salvadores


## Script de creación de estructura de base de datos

__1. Creación de la base de datos y de todas sus tablas__

*Base de datos: CREATE DATABASE DB_SLC;

*Tablas: 
Usuarios:
create table Users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL, 
password VARBINARY(50) NOT NULL,
state VARCHAR (25));

Maestro de Usuarios:
create table masterUsers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL, 
surname VARCHAR(30) NOT NULL, 
gender VARCHAR(30) NOT NULL,
typeDocument VARCHAR(30) NOT NULL,
document INT(10) NOT NULL, 
email VARCHAR(50) NOT NULL, 
street VARCHAR(100) NOT NULL,
city VARCHAR(50) NOT NULL,
CP varchar(10) NOT NULL,
province VARCHAR(50) NOT NULL,
userID INT NOT NULL,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Compradores:
create table buyers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userID INT NOT NULL,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Carrito:
create table cart (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idBuyer INT NOT NULL,
historyBuyer INT,
FOREIGN KEY (idBuyer) REFERENCES buyers(ID));

ALTER TABLE buyers
ADD FOREIGN KEY (idCart) REFERENCES cart(ID);

Vendedores:
create table sellers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userID INT NOT NULL,
historySeller INT,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Transacciones:
create table transaction (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idBuyer INT,
idSeller INT,
total INT,
trxDate datetime,
FOREIGN KEY (idBuyer) REFERENCES buyers(ID),
FOREIGN KEY (idSeller) REFERENCES sellers(ID));

Transacciones por usuario:
CREATE TABLE trxByUser (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idTrx INT NOT NULL,
FOREIGN KEY (idTrx) REFERENCES transaction(ID));

ALTER TABLE buyers
ADD FOREIGN KEY (idCart) REFERENCES cart(ID);

ALTER TABLE sellers
ADD FOREIGN KEY (historySeller) REFERENCES trxbyuser(ID);

Items de transacción:
create table transactionItem (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idTrx INT NOT NULL,
idProduct INT NOT NULL,
price INT,
quantity INT,
FOREIGN KEY (idProduct) REFERENCES products(ID),
FOREIGN KEY (idTrx) REFERENCES transaction(ID));

Cart Items:
create table cartItem (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idCart INT NOT NULL,
idProduct INT NOT NULL,
price INT,
quantity INT,
FOREIGN KEY (idProduct) REFERENCES products(ID),
FOREIGN KEY (idCart) REFERENCES cart(ID));

Productos:
create table  Products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prodName VARCHAR(30) NOT NULL,
category VARCHAR(100) NOT NULL,
model VARCHAR(30),
voltage VARCHAR(30),
price decimal (6,2) NOT NULL,
description VARCHAR(500) NOT NULL,
image varbinary(8000) NOT NULL
);




__2. Tipos de datos de los campos y sus restricciones__



__3. Relaciones entre las diferentes tablas__

