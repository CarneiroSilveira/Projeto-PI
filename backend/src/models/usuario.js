const database = require("../config/database");
const { DataTypes } = require('sequelize');

class Usuario {
    constructor() {
        this.model = database.db.define("Usuario", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            roles: {
                type: DataTypes.ENUM('Aluno', 'Moderador', 'Administrador', 'Professor'),
                defaultValue: 'Aluno',
                allowNull: false
            },
            genero: {
                type: DataTypes.ENUM('Masculino', 'Feminino', 'Nao-Binario', 'Outro'),
                allowNull: false
            },
            biografia: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            nascimento: {
                type: DataTypes.DATEONLY,
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
    static associate(models) {
        this.hasMany(models.RespostaProfessor, { foreignKey: 'idUsuario' });
        this.hasMany(models.Pergunta, { foreignKey: 'idUsuario' });
        this.hasMany(models.RespostaQuestoes, { foreignKey: 'idUsuario' });
        this.hasOne(models.Moderador, { foreignKey: 'id' });
    }
};

module.exports = new Usuario().model;