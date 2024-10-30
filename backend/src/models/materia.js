const database = require("../config/database");
const { DataTypes } = require('sequelize');

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
  }
  static associate(models) {
    this.hasMany(models.Questoes, { foreignKey: 'idMateria' });
    this.hasMany(models.Disciplina, { foreignKey: 'idMateria' });
    this.hasMany(models.Aula, { foreignKey: 'idMateria' });
  }
}

module.exports = new Materia().model;