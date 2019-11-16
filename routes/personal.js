const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/personal', (req, res, next) => {
  res.json('component/personal')
  console.log(req.user)
  console.log('post request ')
  User.find()
    .then(events => {
      res.json(events)
    })
    .catch(err => next(err))
});



module.exports = router;