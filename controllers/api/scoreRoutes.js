const router = require('express').Router();
const { Score, User } = require('../models'); 


//this could be used for scores of user
//or whatever endpoint is called
//will need to change if there is no scores model
router.get('/highscores', async (req, res) => {
  try {
    // Get all scores and JOIN with user data
    const scoreData = await Score.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    // Serialize data so the template can read it & passes pastscores as an obj
    const pastscores = scoreData.map((score) => score.get({ plain: true }));
    //also we can have scores can be single object or multiple

    // Past scores of user
    //may need to move this to post
    res.render('highscores', { 
      pastscores, //only happens when user is logged in?
    //  logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


