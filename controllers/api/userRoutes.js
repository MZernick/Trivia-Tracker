const router = require('express').Router();
const { User } = require('../../models');
//check to see if user is already logged in

// GET all user
router.get('/', async (req, res) => {
  res.render('home');
  try {
    res.render('home');
    const userData = await User.findAll();
    
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      console.log(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

/*router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.render('home');
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});*/

//on the login page and rejects not found email
router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    //checks the password 
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    //both work and get the user id and change the logged in value
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
      res.redirect('/trivia');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//what's page/ current score?
router.post('/highscores', async (req, res) => {
  //something like 
  //if 
  //const newUserHighscore=  req.session.user_high_Score
});

//logout and gets rid of session info and redirects to main page
router.post('/', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
        res.redirect('/');
        return;
  } else {
    res.status(404).end();
  }
});

module.exports = router;
