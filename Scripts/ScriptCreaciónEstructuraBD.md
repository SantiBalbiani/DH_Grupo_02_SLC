# Proyecto Integrador de Digital House

Grupo 02 | Santiago Balbiani - Luciano Schiavone - Clara Salvadores


## Planteo de la BD
__Relaciones entre las diferentes tablas__
__Entidades__
*Usuarios
*Productos
*Transacciones
*Carrito
*Categorías

__Consignas__
*Un usuario puede vender muchos productos
*Un usuario puede comprar muchos productos, por medio de transacciones
*Una transacción puede tener un solo usuario vendedor
*Una transacción puede tener un solo usuario comprador
*Una transacción muchos items (productos)
*Un producto puede estar en muchas transacciones
*Un carrito puede tener muchos items (productos)
*Un producto puede estar en muchos carritos
*La diferencia entre carrito y transacción es el estado del carrito.
Cuando un carrito finaliza el proceso de compra, tiene un id transacción.


## Script de creación de estructura de base de datos

__1. Creación de la base de datos y de todas sus tablas__
__2. Tipos de datos de los campos y sus restricciones__


*Base de datos: CREATE DATABASE DB_SLC;

*Tablas: 
Usuarios:
create table Users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL, 
password VARBINARY(500) NOT NULL,
state INT DEFAULT 1,
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);

Maestro de Usuarios:
create table masterUsers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL, 
surname VARCHAR(50) NOT NULL, 
gender VARCHAR(30) NOT NULL,
typeDocument VARCHAR(30) NOT NULL,
document VARCHAR(30), NOT NULL, 
telephone INT(50),
email VARCHAR(50) NOT NULL, 
street VARCHAR(100) NOT NULL,
city VARCHAR(50) NOT NULL,
CP varchar(10) NOT NULL,
province VARCHAR(50) NOT NULL,
userID INT NOT NULL,
avatarName VARCHAR(50),
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Categorías:
create table  categories (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
categoryName VARCHAR(30) NOT NULL,
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);


Compradores:
create table buyers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userID INT NOT NULL,
idCart INT DEFAULT NULL,
historyBuyer INT DEFAULT NULL,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Vendedores:
create table sellers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userID INT NOT NULL,
historySeller INT DEFAULT NULL,
FOREIGN KEY (UserID) REFERENCES Users(ID));

Productos:
create table  Products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prodName VARCHAR(500) NOT NULL,
idCategory INT,
idBuyer INT,
model VARCHAR(30),
voltage VARCHAR(30),
price decimal (6,2) NOT NULL,
description VARCHAR(5000) DEFAULT NULL,
imageName VARCHAR(256) NULL DEFAULT NULL ,
state INT DEFAULT 1,
FOREIGN KEY (idBuyer) REFERENCES buyers(ID),
FOREIGN KEY (idCategory) REFERENCES categories(ID),
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);

Transacciones:
create table transaction (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idBuyer INT,
idSeller INT,
total INT,
trxDate datetime,
FOREIGN KEY (idBuyer) REFERENCES buyers(ID),
FOREIGN KEY (idSeller) REFERENCES sellers(ID),
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);


Transacciones por usuario:
CREATE TABLE trxByUser (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idTrx INT NOT NULL,
FOREIGN KEY (idTrx) REFERENCES transaction(ID));

Carrito:
create table cart (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
state INT,
idBuyer INT,
idTrx INT,
FOREIGN KEY (idBuyer) REFERENCES buyers(ID),
FOREIGN KEY (idTrx) REFERENCES transaction(ID),
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);

Agregar FK idCart a tabla Vendedores
ALTER TABLE buyers
ADD FOREIGN KEY (idCart) REFERENCES cart(ID);

Agregar FK historia de trx a tabla Vendedores
ALTER TABLE buyers
ADD FOREIGN KEY (historyBuyer) REFERENCES trxbyuser(ID);

Agregar FK historia de trx a tabla Compradores
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












