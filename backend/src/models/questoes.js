const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Professor = require("./professor");
const Materia = require("./materia");
const Pergunta = require("./pergunta");
const RespostaQuestoes = require("./respostaQuestoes");

class Questoes {
    constructor() {
        this.model = database.db.define("Questoes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING,
                allowNull: true
            },
            a: {
                type: DataTypes.STRING,
                allowNull: true
            },
            b: {
                type: DataTypes.STRING,
                allowNull: true
            },
            c: {
                type: DataTypes.STRING,
                allowNull: true
            },
            d: {
                type: DataTypes.STRING,
                allowNull: true
            },
            e: {
                type: DataTypes.STRING,
                allowNull: true
            },
            tipo: {
                type: DataTypes.ENUM('multipla-escolha', 'descritiva', 'anexo'),
                allowNull: false
            },
            idProfessor: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            idMateria: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
        });
        this.model.belongsTo(Professor, { foreignKey: 'idProfessor' });
        this.model.belongsTo(Materia, { foreignKey: 'idMateria' });
        this.model.hasMany(Pergunta, { foreignKey: 'idQuestoes' });
        this.model.hasMany(RespostaQuestoes, { foreignKey: 'idQuestoes' });
    }
}

module.exports = new Questoes().model;