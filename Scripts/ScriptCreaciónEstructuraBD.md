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
avatarName VARCHAR(50),
password VARCHAR(100) NOT NULL,
state INT DEFAULT 1,
createdAt timestamp NULL DEFAULT NULL,
updatedAt timestamp NULL DEFAULT NULL);

Debajo el script
======================================================================================================================================

CREATE DATABASE db_slc;

CREATE TABLE db_slc.masterusers ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, surname VARCHAR(50) NOT NULL, gender VARCHAR(30) NOT NULL, typeDocument VARCHAR(30) NOT NULL, document VARCHAR(30) NOT NULL, telephone INT(50), email VARCHAR(50) NOT NULL, street VARCHAR(100) NOT NULL, city VARCHAR(50) NOT NULL, CP varchar(10) NOT NULL, province VARCHAR(50) NOT NULL, avatarName VARCHAR(50), password VARCHAR(100) NOT NULL, state INT DEFAULT 1, createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);

CREATE TABLE db_slc.categories ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(30) NOT NULL, createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);

CREATE TABLE db_slc.Products ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, prodName VARCHAR(500) NOT NULL, idCategory INT, idSeller INT, model VARCHAR(30), voltage VARCHAR(30), price decimal (6,2) NOT NULL, description VARCHAR(5000) DEFAULT NULL, imageName VARCHAR(256) NULL DEFAULT NULL , state INT DEFAULT 1, FOREIGN KEY (idSeller) REFERENCES masterusers(ID), FOREIGN KEY (idCategory) REFERENCES categories(ID), createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);

CREATE TABLE db_slc.trx ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, idBuyer INT, total INT, trxDate datetime, FOREIGN KEY (idBuyer) REFERENCES masterusers(ID),  createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);

CREATE TABLE db_slc.trxItem ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, idTrx INT, idProd INT, cant INT, FOREIGN KEY (idTrx) REFERENCES trx(ID), FOREIGN KEY (idProd) REFERENCES Products(ID) );

CREATE TABLE db_slc.cart ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, idUser INT,  FOREIGN KEY (idUser) REFERENCES masterusers(ID), createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);

CREATE TABLE  db_slc.cartItem ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, idCart INT, idProd INT, cant INT, FOREIGN KEY (idCart) REFERENCES cart(ID), FOREIGN KEY (idProd) REFERENCES Products(ID) , createdAt timestamp NULL DEFAULT NULL, updatedAt timestamp NULL DEFAULT NULL);











