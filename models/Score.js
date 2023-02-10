const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init( 
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,        
    },
    user_scores: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'score',
    }
)

module.exports = Score;