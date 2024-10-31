const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const RespostaProfessor = require("./respostaProfessor");
const Questoes = require("./questoes");
const Disciplina = require("./disciplina");
const Aula = require("./aula");

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
    this.model.belongsTo(Usuario, { foreignKey: 'id' });
    this.model.hasOne(this.model, { foreignKey: 'id' });
    this.model.hasMany(RespostaProfessor, { foreignKey: 'idProfessor' });
    this.model.hasMany(Questoes, { foreignKey: 'idProfessor' });
    this.model.hasMany(Aula, { foreignKey: 'idProfessor' });
  }
}

module.exports = new Professor().model;