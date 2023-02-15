const router = require('express').Router();
const { Score, User } = require('../../models');
const withAuth = require('../../utils/auth');


// pull single user's scores
router.get('/:id', async (req, res) => {
  try {
    // Get all scores and JOIN with user data
    const scoreData = await Score.findbypk(
      {
        where: {
          id: req.params.id,
          // user_id: req.session.user_id,
        },
        order: [
          ['date_created', 'DESC'],
          ['time_created', 'ASC'],
      ],
        include: [
          {
            model: User,
            attributes: ['id'],
          },
        ],
      }
    );
    res.status(200).json(scoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
            attributes: ['date_created', 'time_created'],

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
    const newScore = await Score.create({
      ...req.body,
      user_id: req.session.user_id,
      //user_id: 1 WORKS but need ^ session to work 
    });

    res.status(200).json(newScore);
    console.log(newScore);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;