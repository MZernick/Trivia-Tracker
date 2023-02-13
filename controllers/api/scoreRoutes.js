const router = require('express').Router();
const { Score, User } = require('../../models'); 


//this could be used for scores of user
//or whatever endpoint is called

router.get('/', async (req, res) => {
  try {
    // Get all scores and JOIN with user data
    const scoreData = await Score.findAll(
      {
      include: [
        {
          model: User,
          attributes: ['id'],
          model: Score,
          attributes: ['date_created'],
          
        },
      ],
    }
    );
    
    res.status(200).json(scoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/newscore', async (req, res) => {
  try {
    const newScore = await Score.create(req.body);

    req.body.save(() => {
      req.body.game_score = game_score;
      req.body.user_id = user_id;
      // req.session.logged_in = true;
      res.status(200).json(newScore);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//     // Serialize data so the template can read it & passes pastscores as an obj
//     const pastscores = scoreData.map((score) => score.get({ plain: true }));
//     //also we can have scores can be single object or multiple

//     // Past scores of user
//     //may need to move this to post
//     res.render('userscores', { 
//       pastscores, //only happens when user is logged in?
//     //  logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;