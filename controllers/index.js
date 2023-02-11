const router = require('express').Router();
const userRoutes= require('./htmlroutes.js/index')
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', userRoutes);

module.exports = router;
