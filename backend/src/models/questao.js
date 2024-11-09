const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Professor = require("./professor");
const Materia = require("./materia");

class Questao {
    constructor() {
        this.model = database.db.define("Questao", {
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
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            a: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            b: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            c: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            d: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            e: {
                type: DataTypes.STRING(1024),
                allowNull: true
            },
            tipo: {
                type: DataTypes.ENUM('multipla-escolha', 'descritiva', 'anexo'),
                allowNull: false
            },
            idProfessor: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Professor,
                    key: "id"
                }
            },
            idMateria: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Materia,
                    key: "id"
                }
            },
        });
        this.model.hasMany(Professor, { foreignKey: 'idProfessor' });
        Professor.belongsTo(this.model, { foreignKey: 'idProfessor' });

        this.model.hasMany(Materia, { foreignKey: 'idMateria' });
        Materia.belongsTo(this.model, { foreignKey: 'idMateria' });
    }
}

module.exports = new Questao().model;