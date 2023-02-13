const User = require('./userInfo');
const Score = require('./Score')


User.hasMany(Score, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Score.belongsTo(User, {
  foreignKey: 'user_id'
})
  
module.exports = { User, Score };
