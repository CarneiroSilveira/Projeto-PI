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
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
    this.belongsTo(models.Aula, { foreignKey: 'idAula' });
    this.belongsTo(models.Questoes, { foreignKey: 'idQuestoes' });
    this.hasMany(models.RespostaProfessor, { foreignKey: 'idPergunta' });
    this.hasMany(models.Denuncia, { foreignKey: 'idPergunta' });
  }
}

module.exports = new Pergunta().model;