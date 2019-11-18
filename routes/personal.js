const express = require('express');
const router = express.Router();
const personal = require('../models/Personal');
const ConverterOcr = require('../models/ConverterOcr');
const User = require('../models/User');


router.post('/personal', (req, res, next) => {
  const { nameUser, numberOfFiles} = req.body;

});







module.exports = router;