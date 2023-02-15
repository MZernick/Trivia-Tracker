const { Score, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/highscores', async (req, res) => {
  try {
    // Get all scores and JOIN with user data
    const scoreData = await Score.findAll({
      order: [
        ['game_score', 'DESC']
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const scores = scoreData.map((score) => score.get({ plain: true }));
    const tutor = scores.map((score, index) => score.place = index + 1);
    res.render('highscores', {
      scores,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userscores', async (req, res) => {
  console.log("hello")
  try {
    // Get all user scores and JOIN with user data
    const scoreData = await User.findByPk(req.session.user_id, {
      
      include: [
        {
          model: Score,
          attributes: ['game_score', 'date_created', 'time_created'],
        },
      ],
    });

    // Serialize data so the template can read it
    const scores = scoreData.get({ plain: true });
    console.log(scores);
    // Pass serialized data and session flag into template
    res.render('userscores', {
      ...scores,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;