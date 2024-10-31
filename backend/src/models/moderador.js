const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const Denuncia = require("./denuncia");

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
    this.model.belongsTo(Usuario, { foreignKey: 'id' });
    this.model.hasMany(Denuncia, { foreignKey: 'idModerador' });
  }
}

module.exports = new Moderador().model;