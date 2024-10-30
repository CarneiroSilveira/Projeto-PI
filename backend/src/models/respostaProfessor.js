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
                allowNull: false
            },
            idProfessor: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            idPergunta: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            dataCriacao: {
                type: DataTypes.DATE,
                allowNull: false
            },
            dataAtualizacao: {
                type: DataTypes.DATE,
                allowNull: true
            }
        });
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
        this.belongsTo(models.Professor, { foreignKey: 'idProfessor' });
        this.belongsTo(models.Pergunta, { foreignKey: 'idPergunta' });
        this.hasMany(models.Denuncia, { foreignKey: 'idResposta' });
    }
}

module.exports = new RespostaProfessor().model;