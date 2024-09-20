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
        type: database.db.Sequelize.ENUM("Admin", "Studant", "Premium", "Moderator"),
        defaultValue: "Studant",
      },
    });

    // Estabelece uma conexão many-to-many entre a tabela users e characters e cria uma tabela intermediaria chamada profile
    this.model.associate = (models) => {
      Student.belongsToMany(models.characters, {
        through: 'profile', // Nome da tabela de junção
        foreignKey: 'userId'
      });
      // Faz a mesma coisa mas com a tabela subjects
    };
        Student.belongsToMany(models.subjects, {
        through: 'favorite-subjects', // Nome da tabela de junção
        foreignKey: 'userId'
    });
  }
}

module.exports = new User().model;