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
  static associate() {
    this.model.belongsTo(Usuario, { foreignKey: 'id' });
  }
}

module.exports = new Professor().model;