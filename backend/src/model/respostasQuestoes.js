const database = require("../config/database");

class RespostaQuestoes {
    constructor() {
        this.model = database.db.define("RespostaQuestoes", {
            id: {
                type: database.db.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            resposta: {
                type: database.db.STRING,
                allowNull: true
            },
            anexo: {
                type: database.db.STRING,
                allowNull: true
            }
        });
    }
}

module.exports = new RespostaQuestoes().model;