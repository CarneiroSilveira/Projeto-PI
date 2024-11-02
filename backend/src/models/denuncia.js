const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Pergunta = require("./pergunta");
const Moderador = require("./moderador");
const respostaProfessor = require("./respostaProfessor");

class Denuncia {
  constructor() {
    this.model = database.db.define("Denuncia", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      violacoes: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      idPergunta: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Pergunta,
          key: "id"
        }
      },
      idModerador: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: Moderador,
          key: "id"
        }
      },
      idRespostaProfessor: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: respostaProfessor,
          key: "id"
        }
      }

    });
    this.model.hasMany(Moderador, { foreignKey: "idModerador" });
    Moderador.belongsTo(this.model, { foreignKey: "idModerador" });

    this.model.hasMany(Pergunta, { foreignKey: "idPergunta" });
    Pergunta.belongsTo(this.model, { foreignKey: "idPergunta" });

    this.model.hasMany(respostaProfessor, { foreignKey: "idRespostaProfessor" });
    respostaProfessor.belongsTo(this.model, { foreignKey: "idRespostaProfessor" });
  }
}

module.exports = new Denuncia().model;