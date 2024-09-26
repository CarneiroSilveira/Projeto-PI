const database = require("../config/database");

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