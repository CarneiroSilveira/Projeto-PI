const database = require("../config/database");

class Usuario {
    constructor() {
        this.model = database.db.define("Usuario", {
            id: {
                type: database.db.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: database.db.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: database.db.STRING,
                allowNull: false,
                unique: true
            },
            senha: {
                type: database.db.STRING,
                allowNull: false
            },
            roles: {
                type: database.db.ENUM('Aluno', 'Moderador', 'Administrador', 'Professor'),
                defaultValue: 'Aluno',
                allowNull: false
            },
            genero: {
                type: database.db.ENUM('Masculino', 'Feminino', 'Nao-Binario', 'Outro'),
                allowNull: false
            },
            biografia: {
                type: database.db.STRING(1024),
                allowNull: true
            },
            dataNascimento: {
                type: database.db.DATE,
                allowNull: false
            },
            nome: {
                type: database.db.STRING(32),
                allowNull: false
            },
            sobrenome: {
                type: database.db.STRING(32),
                allowNull: false
            }
        });
    }
};

module.exports = new Usuario().model;