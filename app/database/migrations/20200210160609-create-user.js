'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      numeroDoc: {
        type: Sequelize.STRING
      },
      nombreUsuario: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      telefono2: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      cp: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};