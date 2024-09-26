const database = require("../config/database");

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
            dataCriacao: {
                type: DataTypes.DATE,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING,
                allowNull: true
            },
            dataAtualizacao: {
                type: DataTypes.DATE,
                allowNull: true
            }
        });
    }
}

module.exports = new Aula().model;
