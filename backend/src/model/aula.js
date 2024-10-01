const database = require("../config/database");

class Aula {
    constructor() {
        this.model = database.db.define("Aula", {
            id: {
                type: database.db.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: database.db.STRING,
                allowNull: false
            },
            video: {
                type: database.db.STRING,
                allowNull: true
            },
            descricao: {
                type: database.db.TEXT,
                allowNull: false
            },
            dataCriacao: {
                type: database.db.DATE,
                allowNull: false
            },
            imagem: {
                type: database.db.STRING,
                allowNull: true
            },
            dataAtualizacao: {
                type: database.db.DATE,
                allowNull: true
            }
        });
    }
}

module.exports = new Aula().model;
