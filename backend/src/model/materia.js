const database = require("../config/database");

class Materia {
  constructor() {
    this.model = database.db.define("Materia", {
      id: {
        type: database.db.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: database.db.STRING,
        allowNull: false
      }
    });
  }
}

module.exports = new Materia().model;