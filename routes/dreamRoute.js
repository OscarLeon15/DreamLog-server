const express = require('express');
const router = express.Router();
const dreamEntry = require('../models/dreamEntry');

// --- Post dream to DB ------------------------
router.post('/dreamRoute', (req, res, next) => {
  const dreamEnteredInDb = req.body.dreamEntry
  // console.log("req.body ~~~~>", req.body)
  // console.log("req.body.dreamEntry ~~~~>", req.body.dreamEntry)
  dreamEntry.create({
    dreamText: dreamEnteredInDb
  })
    .then(thisDreamText => {
      console.log("Success! This is dream text in POST route ===>>>", thisDreamText);
    })
    .catch(err => console.log("Error posting dream to DB:====>>>", err))
  console.log('hello from the dream entry route!!!')
});


// --- Get dream from DB -----------------------
router.get("/returnDream", (req, res, next) => {

  dreamEntry.find()
    .then(stuff => { res.json(stuff) })
    .catch(err => {
      console.log(err)
      res.json({ message: 'this is not working' })
    })
})





module.exports = router;
