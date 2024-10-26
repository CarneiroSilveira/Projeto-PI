const database = require("../config/database");
const { DataTypes } = require('sequelize');
const usuario = require("./usuario");

class Moderador {
  constructor() {
    this.model = database.db.define("Moderadores", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
      },
      id_usuario: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        references: {
          model: usuario,
          key: 'id'
        }
      },
    });
  }
}

module.exports = new Moderador().model;