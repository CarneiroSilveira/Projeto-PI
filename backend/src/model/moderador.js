const database = require("../config/database");

class Moderador {
  constructor() {
    this.model = database.db.define("Moderadores", {
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

module.exports = new Moderador().model;