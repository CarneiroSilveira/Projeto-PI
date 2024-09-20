const database = require("../config/database");

class Question {
  constructor() {
    this.model = database.db.define("questions", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
    });
  }
}

module.exports = new Question().model;