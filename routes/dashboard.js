const express = require('express');
const router = express.Router();
const Personal = require('../models/Personal');
const Dashboard = require('../models/Dashboard');
const User = require('../models/User');


router.post('/dashboard', (req, res, next) => {
  const  parsedText  = req.body.savedText
  // const  parsedText  = req.body.dreamText
  console.log("req.body stuff", req.body)
    Dashboard.create({
      parsedText: parsedText
    })
    .then(themWords => {
      console.log(themWords, "the thing words");
      console.log("this is it!!!!! ---->: ", parsedText, " :<-----the parsedtext words");
  })
  .catch(err => console.log("Err in signup: ", err))
});

// router.post('/personal', (req, res, next) => {
//     const  nameUser  = req.body.currentUser
    
//     Personal.create({
//       nameUser: nameUser
//     })
//     .then(themWords => {
//       console.log(themWords, " :the name");
//   })
//   .catch(err => console.log("Err in signup: ", err))
// });







module.exports = router;