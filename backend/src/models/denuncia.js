const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Denuncia {
  constructor() {
    this.model = database.db.define("Denuncia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      descricao: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      violacoes: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
    });
  }
}

module.exports = new Denuncia().model;