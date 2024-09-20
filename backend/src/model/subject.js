const database = require("../config/database");

class Subject {
  constructor() {
    this.model = database.db.define("subjects", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
    });
  }
}

module.exports = new Subject().model;