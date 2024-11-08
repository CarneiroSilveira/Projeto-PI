const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const Aula = require("./aula");
const Questao = require("./questao");

class Pergunta {
  constructor() {
    this.model = database.db.define("Pergunta", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      corpo: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      validado: {
        type: DataTypes.ENUM('em-andamento', 'validado'),
        allowNull: true
      },
      idUsuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Usuario,
          key: "id"
        }
      },
      idQuestoes: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Questao,
          key: "id"
        }
      },
      idAula: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Aula,
          key: "id"
        }
      }
    });
    this.model.hasMany(Usuario, { foreignKey: 'idUsuario' });
    Usuario.belongsTo(this.model, { foreignKey: 'idUsuario' });

    this.model.hasMany(Aula, { foreignKey: 'idAula' });
    Aula.belongsTo(this.model, { foreignKey: 'idAula' });

    this.model.hasMany(Questao, { foreignKey: 'idQuestoes' });
    Questao.belongsTo(this.model, { foreignKey: 'idQuestoes' });
  }
}

module.exports = new Pergunta().model;