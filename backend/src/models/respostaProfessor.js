const database = require("../config/database");
const { DataTypes } = require('sequelize');

class RespostaProfessor {
    constructor() {
        this.model = database.db.define("RespostasProfessor", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            corpo: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        });
    }
}

module.exports = new RespostaProfessor().model;