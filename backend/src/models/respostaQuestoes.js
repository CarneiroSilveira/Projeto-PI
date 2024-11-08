const database = require("../config/database");
const { DataTypes } = require('sequelize');
const Usuario = require("./usuario");
const Questao = require("./questao");

class RespostaQuestoes {
    constructor() {
        this.model = database.db.define("RespostaQuestoes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            resposta: {
                type: DataTypes.STRING,
                allowNull: true
            },
            anexo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            idUsuario: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Usuario,
                    key: "id"
                }
            },
            idQuestoes: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: Questao,
                    key: "id"
                }
            },
        });
        this.model.hasMany(Usuario, { foreignKey: 'idUsuario' });
        Usuario.belongsTo(this.model, { foreignKey: 'idUsuario' });

        this.model.hasMany(Questao, { foreignKey: 'idQuestoes' });
        Questao.belongsTo(this.model, { foreignKey: 'idQuestoes' });
    }
}


module.exports = new RespostaQuestoes().model;