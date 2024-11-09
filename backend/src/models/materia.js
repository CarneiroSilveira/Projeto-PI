const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Materia {
  constructor() {
    this.model = database.db.define("Materia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    });
  }
}

module.exports = new Materia().model;