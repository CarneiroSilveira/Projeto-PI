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
    this.model.hasOne(Usuario, { foreignKey: 'id' });
    Usuario.belongsTo(this.model, { foreignKey: 'id' });
  }
}

module.exports = new Professor().model;