const router = require('express').Router();
const { Scores, User } = require('../models');
const withAuth = require('../utils/auth');
// Use withAuth middleware to prevent access to route
//or whatever the "trivia" endpoint is actually called
router.get('/trivia', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Scores }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('trivia', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  /*router.get('/trivia', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/trivia');
      return;
    }
  
    res.render('login');
  });*/
  
  module.exports = router;