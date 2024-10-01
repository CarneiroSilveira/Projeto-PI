const database = require("../config/database");

class Questoes {
    constructor() {
        this.model = database.db.define("Questoes", {
            id: {
                type: database.db.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: database.db.STRING,
                allowNull: false
            },
            descricao: {
                type: database.db.TEXT,
                allowNull: false
            },
            imagem: {
                type: database.db.STRING,
                allowNull: true
            },
            a: {
                type: database.db.STRING,
                allowNull: true
            },
            b: {
                type: database.db.STRING,
                allowNull: true
            },
            c: {
                type: database.db.STRING,
                allowNull: true
            },
            d: {
                type: database.db.STRING,
                allowNull: true
            },
            e: {
                type: database.db.STRING,
                allowNull: true
            },
            tipo: {
                type: database.db.ENUM('multipla-escolha', 'descritiva', 'anexo'),
                allowNull: false
            }
        });
    }
}

module.exports = new Questao().model;