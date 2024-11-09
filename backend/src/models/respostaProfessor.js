const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const Professor = require("./professor");
const Pergunta = require("./pergunta");

class RespostaProfessor {
    constructor() {
        this.model = database.db.define("RespostasProfessor", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            corpo: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            idUsuario: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Usuario,
                    key: "id"
                }
            },
            idProfessor: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Professor,
                    key: "id"
                }
            },
            idPergunta: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Pergunta,
                    key: "id"
                }
            },
        }, { deletedAt: true });
        this.model.hasMany(Usuario, { foreignKey: 'idUsuario' });
        Usuario.belongsTo(this.model, { foreignKey: 'idUsuario' });

        this.model.hasMany(Professor, { foreignKey: 'idProfessor' });
        Professor.belongsTo(this.model, { foreignKey: 'idProfessor' });

        this.model.hasMany(Pergunta, { foreignKey: 'idPergunta' });
        Pergunta.belongsTo(this.model, { foreignKey: 'idPergunta' });
    }
}

module.exports = new RespostaProfessor().model;