const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Disciplina {
  constructor() {
    this.model = database.db.define("Disciplina", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      }
    });
  }
}

module.exports = new Disciplina().model;