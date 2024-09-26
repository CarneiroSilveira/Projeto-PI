const database = require("../config/database");

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
}

module.exports = new RespostaProfessor().model;