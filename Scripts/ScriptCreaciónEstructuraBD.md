# Proyecto Integrador de Digital House

Grupo 02 | Santiago Balbiani - Luciano Schiavone - Clara Salvadores


## Script de creación de estructura de base de datos

__1. Creación de la base de datos y de todas sus tablas__

*Base de datos: CREATE DATABASE DB_SLC;

*Tablas: 
Usuarios:
create table Users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL, 
password VARBINARY(50) NOT NULL,
state VARCHAR (25));

Productos
create table Products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL);



__2. Tipos de datos de los campos y sus restricciones__



__3. Relaciones entre las diferentes tablas__

