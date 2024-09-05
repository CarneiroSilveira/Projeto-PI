const database = require("../config/database");

class User {
  constructor() {
    this.model = database.db.define("users", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: database.db.Sequelize.STRING,
      },
      email: {
        type: database.db.Sequelize.STRING,
        unique: true,
      },
      senha: {
        type: database.db.Sequelize.STRING,
      },
      permission: {
        type: database.db.Sequelize.ENUM("Admin", "Custumer", "Premium", "Verifcated", "Teach"),
        defaultValue: "Custumer",
      },
    });
  }
}

module.exports = new User().model;