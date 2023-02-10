const User = require('./userInfo');
// const Trivia = require('./Trivia');
const Score = require('./Score')

//Scores belongs to user

//user has many scores
User.hasMany(Score, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
//trvia has many users

module.exports = { User, Score };
