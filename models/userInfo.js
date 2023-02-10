const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}


User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    high_score: {
      type: DataTypes.INTEGER,
    },
    scores: {
      type: DataTypes.INTEGER,
      references: {
        model: 'score',
        key: 'score',
      },
    },
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

module.exports = User;