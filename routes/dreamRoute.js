const express = require('express');
const router = express.Router();
const dreamEntry = require('../models/dreamEntry');


router.post('/dreamRoute', (req, res, next) => {
  const dreamEnteredInDb = req.body.dreamEntry
  console.log("req.body stuff", req.body)
  dreamEntry.create({
    dreamText: dreamEnteredInDb
  })
    .then(thisDreamText => {
      console.log("Success! This is dream text in POST route ===>>>", thisDreamText);
    })
    .catch(err => console.log("Error posting dream to DB:====>>>", err))
  console.log('hello from the drem entry route!!!')
});


module.exports = router;
// ----------------------
// const express = require('express');
// const router = express.Router();
// const Personal = require('../models/Personal');
// const Dashboard = require('../models/Dashboard');
// const User = require('../models/User');


// router.post('/dashboard', (req, res, next) => {
//   const parsedText = req.body.savedText
//   console.log("req.body stuff", req.body)
//   Dashboard.create({
//     parsedText: parsedText
//   })
//     .then(themWords => {
//       console.log(themWords, "the thing words");
//       console.log(parsedText, "the parsedtext words");
//     })
//     .catch(err => console.log("Err in signup: ", err))
// });

// router.post('/personal', (req, res, next) => {
//   const nameUser = req.body.currentUser

//   Personal.create({
//     nameUser: nameUser
//   })
//     .then(themWords => {
//       console.log(themWords, " :the name");
//     })
//     .catch(err => console.log("Err in signup: ", err))
// });

// module.exports = router;