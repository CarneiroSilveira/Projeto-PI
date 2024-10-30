const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");

class Professor {
  constructor() {
    this.model = database.db.define("Professor", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
      },
    });
  }
  static associate(models) {
    this.hasMany(models.RespostaProfessor, { foreignKey: 'idProfessor' });
    this.hasMany(models.Questoes, { foreignKey: 'idProfessor' });
    this.hasMany(models.Disciplina, { foreignKey: 'idProfessor' });
    this.hasMany(models.Aula, { foreignKey: 'idProfessor' });
  }
}

module.exports = new Professor().model;