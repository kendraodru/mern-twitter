const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet')
const validateTweetInput = require('../../validation/tweets');

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

router.get("/", (req,res) =>{
    Tweet.find()
        .sort({ date: -1})
        .then( tweets => res.json(tweets))
        .catch(err => res.status(400).json(err))
});


router.get('/user/:user_id', (req, res)=>{
  Tweet
    .find({ user: req.params.user_id})
    .then(tweets => res.json(tweets))
    .catch(err=> res.status(400).json(err));
})

router.get('/:id', (req, res)=>{
  Tweet
    .findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err => res.status(400).json(err));
})

// question4:how is this passport being used in the actual function?
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
      // return res.json('hello')
    }

    const newTweet = new Tweet({
      user: req.user.id,
      text: req.body.text
    });
    // console.log(newTweet)
    newTweet
      .save()
      .then(tweet => res.json(tweet));
  }
);

module.exports = router;
