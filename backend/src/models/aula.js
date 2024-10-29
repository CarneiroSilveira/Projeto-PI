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
    static associate() {
        this.model.belongsTo(Professor, { foreignKey: 'idProfessor' });
        this.model.belongsTo(Materia, { foreignKey: 'idMateria' });
    }
}
module.exports = new Aula().model;
