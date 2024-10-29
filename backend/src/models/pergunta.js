const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario');
const Questoes = require('./questoes');
const Aula = require('./aula');

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
      validado: {
        type: DataTypes.ENUM('em-andamento', 'validado'),
        allowNull: true
      },
      idUsuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      idQuestoes: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      idAula: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    });
  }
  static associate() {
    this.model.belongsTo(Usuario, { foreignKey: 'idUsuario' });
    this.model.belongsTo(Questoes, { foreignKey: 'idQuestoes' });
    this.model.belongsTo(Aula, { foreignKey: 'idAula' });
  }
}

module.exports = new Pergunta().model;