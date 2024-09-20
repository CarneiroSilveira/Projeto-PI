const database = require("../config/database");

class Character {
  constructor() {
    this.model = database.db.define("characters", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: database.db.Sequelize.STRING,
      },
      image: {
        type: database.db.Sequelize.STRING,
      },
      gender: {
        type: database.db.Sequelize.ENUM('Female', 'Male', 'Other'),
        allowNull: false,
      },
      status: {
        type: database.db.Sequelize.ENUM('Alive', 'Deleted'),
        defaultValue: 'Alive'
      },
      
    });

    this.model.associate = (models) => {
        Student.belongsToMany(models.users, {
          through: 'profile', // Nome da tabela de junção
          foreignKey: 'userId'
        });
      };
  }
}

module.exports = new Character().model;