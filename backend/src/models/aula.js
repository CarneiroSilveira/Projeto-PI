const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Professor = require('./professor');
const Materia = require('./materia');

class Aula {
    constructor() {
        this.model = database.db.define("Aula", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
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
            idProfessor: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            idMateria: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
        });
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'idProfessor' });
        this.belongsTo(models.Materia, { foreignKey: 'idMateria' });
        this.hasMany(models.Pergunta, { foreignKey: 'idAula' });
    }
}
module.exports = new Aula().model;
