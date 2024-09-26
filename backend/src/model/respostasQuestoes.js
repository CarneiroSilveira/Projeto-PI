const database = require("../config/database");

class RespostaQuestoes {
    constructor() {
        this.model = database.db.define("RespostaQuestoes", {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            resposta: {
                type: DataTypes.STRING,
                allowNull: true
            },
            anexo: {
                type: DataTypes.STRING,
                allowNull: true
            }
        });
    }
}

module.exports = new RespostaQuestoes().model;