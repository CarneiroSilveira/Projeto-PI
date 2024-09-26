const database = require("../config/database");

class Pergunta {
  constructor() {
    this.model = database.db.define("Pergunta", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      corpo: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false
      },
      dataAtualizacao: {
        type: DataTypes.DATE,
        allowNull: true
      },
      validado: {
        type: DataTypes.ENUM('em-andamento', 'validado'),
        allowNull: true
      }
    });
  }
}

module.exports = new Pergunta().model;