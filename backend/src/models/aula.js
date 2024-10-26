const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Aula {
    constructor() {
        this.model = database.db.define("Aula", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            video: {
                type: DataTypes.STRING,
                allowNull: true
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });
    }
}

module.exports = new Aula().model;
