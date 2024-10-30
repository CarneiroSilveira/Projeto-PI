const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require('./usuario');
const Questoes = require('./questoes');

class RespostaQuestoes {
    constructor() {
        this.model = database.db.define("RespostaQuestoes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            resposta: {
                type: DataTypes.STRING,
                allowNull: true
            },
            anexo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            idUsuario: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            idQuestoes: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
        });
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
        this.belongsTo(models.Questoes, { foreignKey: 'idQuestoes' });
    }
}


module.exports = new RespostaQuestoes().model;