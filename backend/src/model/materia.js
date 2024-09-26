const database = require("../config/database");

class Materia {
  constructor() {
    this.model = database.db.define("Materia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  }
}

module.exports = new Materia().model;