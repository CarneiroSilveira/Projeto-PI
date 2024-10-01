const database = require("../config/database");

class Denuncia {
  constructor() {
    this.model = database.db.define("Denuncia", {
      id: {
        type: database.db.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      descricao: {
        type: database.db.STRING(1024),
        allowNull: false
      },
      violacoes: {
        type: database.db.STRING(1024),
        allowNull: false
      },
      dataCriacao: {
        type: database.db.DATE,
        allowNull: false
      }
    });
  }
}

module.exports = new Denuncia().model;