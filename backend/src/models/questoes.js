const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Questoes {
    constructor() {
        this.model = database.db.define("Questoes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
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
            }
        });
    }
}

module.exports = new Questao().model;