const express = require('express');
const router = express.Router();
const dreamEntry = require('../models/dreamEntry');

// --- Post dream to DB ------------------------
router.post('/dreamRoute', (req, res, next) => {

  const dreamText = req.body.dreamText
  const dreamName = req.body.dreamName

  console.log("req.body ~~~~>", req.body)
  console.log("req.body.dreamText ~~~~>", req.body.dreamText)
  console.log("req.body.dreamName ~~~~>", req.body.dreamName)

  dreamEntry.create({
    dreamText: dreamText,
    dreamName: dreamName,
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


// --- Delete dream from db -----------------------
router.get("/delete/:id", (req, res, next) => {
  dreamEntry.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
})


// --- Edit dream from db -----------------------

// Grab one dream to edit
router.get("/edit/:id", (req, res, next) => {
  dreamEntry.findOne({ _id: req.params.id })
    .then(stuff => { res.json(stuff) })
    .catch(err => { console.log(err) })

})

// Submit the edit
router.post('/update/:id', (req, res) => {

  const dreamText = req.body.dreamText
  const dreamName = req.body.dreamName

  console.log("req.body ~~~~>", req.body)
  console.log("req.body.dreamText ~~~~>", req.body.dreamText)
  console.log("req.body.dreamName ~~~~>", req.body.dreamName)

  dreamEntry.update({
    dreamText: dreamText,
    dreamName: dreamName,
  })

    .then(dream => { console.log("Success! This is dream text in EDIT route ===>>>", dream) })
    .catch(err => console.log("Error editing dream:====>>>", err))

  console.log('hello from the edit route!!!')
});






module.exports = router;
