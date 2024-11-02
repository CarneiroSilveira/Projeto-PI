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
        allowNull: false,
        references: {
          model: Professor,
          key: "id"
        }
      },
      idMateria: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Materia,
          key: "id"
        }
      }
    });
    this.model.hasMany(Professor, { foreignKey: 'idProfessor' });
    Professor.belongsTo(this.model, { foreignKey: 'idProfessor' });

    this.model.hasMany(Materia, { foreignKey: 'idMateria' });
    Materia.belongsTo(this.model, { foreignKey: 'idMateria' });
  }
}

module.exports = new Disciplina().model;