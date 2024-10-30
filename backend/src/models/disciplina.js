const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Professor = require('./professor');
const Materia = require('./materia');


class Disciplina {
  constructor() {
    this.model = database.db.define("Disciplina", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      idProfessor: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      idMateria: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    });
  }
  static associate(models) {
    this.belongsTo(models.Professor, { foreignKey: 'idProfessor' });
    this.belongsTo(models.Materia, { foreignKey: 'idMateria' });
  }
}

module.exports = new Disciplina().model;