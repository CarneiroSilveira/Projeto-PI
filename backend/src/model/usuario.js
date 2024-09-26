const database = require("../config/database");

class Usuario {
    constructor() {
        this.model = database.db.define("Usuario", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            roles: {
                type: DataTypes.ENUM('Aluno', 'Moderador', 'Administrador', 'Professor', ''),
                defaultValue: 'Aluno',
                allowNull: false
            },
            genero: {
                type: DataTypes.STRING(32),
                allowNull: true
            },
            biografia: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            dataNascimento: {
                type: DataTypes.DATE,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(32),
                allowNull: false
            },
            sobrenome: {
                type: DataTypes.STRING(32),
                allowNull: false
            }
        });
    }
};

module.exports = new Usuario().model;