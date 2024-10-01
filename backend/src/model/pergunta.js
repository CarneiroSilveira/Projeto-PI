const database = require("../config/database");

class Pergunta {
  constructor() {
    this.model = database.db.define("Pergunta", {
      id: {
        type: database.db.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: database.db.STRING,
        allowNull: false
      },
      corpo: {
        type: database.db.TEXT,
        allowNull: false
      },
      dataCriacao: {
        type: database.db.DATE,
        allowNull: false
      },
      dataAtualizacao: {
        type: database.db.DATE,
        allowNull: true
      },
      validado: {
        type: database.db.ENUM('em-andamento', 'validado'),
        allowNull: true
      }
    });
  }
}

module.exports = new Pergunta().model;