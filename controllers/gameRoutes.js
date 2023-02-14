const router = require('express').Router();
const { Score, User } = require('../models');

router.get('/trivia', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Score }],
    });

    const user = userData.get({ plain: true });

    res.render('trivia')

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;