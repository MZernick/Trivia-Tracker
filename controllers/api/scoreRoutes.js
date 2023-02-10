const router = require('express').Router();
const { Score, User } = require('../models'); //"Scores is used as a thing the user has "


//this could be used for scores of user
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const scoreData = await Score.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],//could also do ID
        },
      ],
    });

    // Serialize data so the template can read it & passes pastscores as an obj
    const pastscores = scoreData.map((score) => score.get({ plain: true }));
    //also we can have scores can be single object or multiple

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      pastscores, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
