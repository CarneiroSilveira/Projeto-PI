const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Professor = require("./professor");
const Materia = require("./materia");


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
    this.model.belongsTo(Professor, { foreignKey: 'idProfessor' });
    this.model.hasMany(this.model, { foreignKey: 'idProfessor' });
    this.model.belongsTo(Materia, { foreignKey: 'idMateria' });
  }
}

module.exports = new Disciplina().model;