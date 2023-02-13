var db = require ('../../models');
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

router.get('/highscores', (req, res)=>{
    res.render('/highscores');
});

// router.get('/scores', (req,res) => {
    
// });
module.exports= router;