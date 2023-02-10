const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/score', scoreRoutes);

module.exports = router;
