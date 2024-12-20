const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");

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
      usuarioId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Usuario,
          key: "id"
        }
      }
    }, { deletedAt: true });
    this.model.hasOne(Usuario, { foreignKey: 'usuarioId' });
    Usuario.belongsTo(this.model, { foreignKey: 'usuarioId' });
  }
}

module.exports = new Moderador().model;