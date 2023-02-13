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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    high_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // scores: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'score',
    //     key: 'user_score',
    //   },
    // },
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

module.exports = User;