const database = require("../config/database");

class Professor {
  constructor() {
    this.model = database.db.define("Professor", {
      id: {
        type: database.db.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: database.db.STRING(32),
        allowNull: false,
      },
    });
  }
}

module.exports = new Professor().model;