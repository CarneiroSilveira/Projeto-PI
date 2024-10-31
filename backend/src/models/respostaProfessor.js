const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const Professor = require("./professor");
const Pergunta = require("./pergunta");
const Denuncia = require("./denuncia");

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
        this.model.belongsTo(Usuario, { foreignKey: 'idUsuario' });
        this.model.belongsTo(Professor, { foreignKey: 'idProfessor' });
        this.model.belongsTo(Pergunta, { foreignKey: 'idPergunta' });
        this.model.hasMany(Denuncia, { foreignKey: 'idResposta' });
    }
}

module.exports = new RespostaProfessor().model;