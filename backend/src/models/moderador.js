const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario');

class Moderador {
  constructor() {
    this.model = database.db.define("Moderadores", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
      },
    });
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id' });
    this.hasMany(models.Denuncia, { foreignKey: 'idModerador' });
  }
}

module.exports = new Moderador().model;