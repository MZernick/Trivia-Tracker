const { Score, User } = require('../../models'); 
const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('home');
});

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/signup', (req, res)=>{
    res.render('signup');
});

router.get('/trivia', (req, res)=>{
    res.render('trivia');
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
  
      // Pass serialized data and session flag into template
      res.render('highscores', { 
        scores, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.get('/scores', (req,res) => {
    
// });
module.exports= router;