const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Pergunta = require('./pergunta');
const Moderador = require('./moderador');
const RespostaProfessor = require('./respostaProfessor');

class Denuncia {
  constructor() {
    this.model = database.db.define("Denuncia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      violacoes: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      idPergunta: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      idModerador: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
      },
      idResposta: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
      }

    });
  }
  static associate(models) {
    this.belongsTo(models.Pergunta, { foreignKey: 'idPergunta' });
    this.belongsTo(models.Moderador, { foreignKey: 'idModerador' });
    this.belongsTo(models.RespostaProfessor, { foreignKey: 'idResposta' });
  }
}

module.exports = new Denuncia().model;