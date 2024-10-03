const database = require("../config/database");
const { DataTypes } = require('sequelize');

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
      },
    });
  }
}

module.exports = new Moderador().model;