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
// router.post("/edit/:id", (req, res, next) => {
//   dreamEntry.findByIdAndUpdate({ _id: req.params.id }, function (err, business) {
//     if (err) res.json(err);
//     else res.json('Successfully updated');
//   });
// })

// this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//   const { id, update } = req.body;
//   dreamEntry.findByIdAndUpdate(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });






module.exports = router;
