const database = require("../config/database");

class Answer {
  constructor() {
    this.model = database.db.define("answers", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
    });
  }
}

module.exports = new Answer().model;