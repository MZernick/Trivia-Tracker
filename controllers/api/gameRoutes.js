const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
// Use withAuth middleware to prevent access to route
//or whatever the "playgame endpoint is actually called"
router.get('/playgame', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('playgame', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/playgame', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/playgame');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;