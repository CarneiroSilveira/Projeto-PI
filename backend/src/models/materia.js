const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Questoes = require("./questoes");
const Disciplina = require("./disciplina");
const Aula = require("./aula");

class Materia {
  constructor() {
    this.model = database.db.define("Materia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    this.model.hasMany(Questoes, { foreignKey: 'idMateria' });
    this.model.hasMany(Disciplina, { foreignKey: 'idMateria' });
    this.model.hasMany(Aula, { foreignKey: 'idMateria' });
  }
}

module.exports = new Materia().model;