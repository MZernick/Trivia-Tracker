var db = require ('../models');
const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('main');
});

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/signup', (req, res)=>{
    res.render('signup');
});

router.get('/highscores', (req, res)=>{
    res.render('/highscores');
});