const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./questionRoutes');

router.use('/users', userRoutes);
router.use('/question', questionRoutes);

module.exports = router;
