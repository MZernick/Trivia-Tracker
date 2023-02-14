const router = require('express').Router();
const { User } = require('../../models');
//check to see if user is already logged in

// GET all user - WORKS
router.get('/', async (req, res) => {
  try {
    // res.render('home');
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log("signupRouteTest")
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id,
        req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {

    res.status(400).json(err);


  }
});

//on the login page and rejects not found username
router.post('/login', async (req, res) => {

  try {

    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {

      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    console.log("userRoutes.js line 50", userData)
    // checks the password 
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout and gets rid of session info and redirects to main page
router.post('/logout', (req, res) => {
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