const database = require("../config/database");

class RespostaProfessor {
    constructor() {
        this.model = database.db.define("RespostasProfessor", {
            id: {
                type: database.db.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            corpo: {
                type: database.db.TEXT,
                allowNull: false
            },
            dataCriacao: {
                type: database.db.DATE,
                allowNull: false
            },
            dataAtualizacao: {
                type: database.db.DATE,
                allowNull: true
            }
        });
    }
}

module.exports = new RespostaProfessor().model;