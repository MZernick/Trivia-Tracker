const router = require('express').Router();
const userRoutes= require('./htmlroutes.js/index');
const apiRoutes = require('./api');
const gameRoutes = require('./gameRoutes');

router.use('/api', apiRoutes);
router.use('/', userRoutes);
router.use('/trivia', gameRoutes);

module.exports = router;
