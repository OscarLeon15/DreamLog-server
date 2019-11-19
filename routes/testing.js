const express = require('express');
const router = express.Router();
const uploadCloud = require('../configs/cloudinary/cloudinaryConfig')


router.post('/testing', uploadCloud.single('theImage'), (req, res, next) => {
  // console.log(req.file )
  res.json(req.file.secure_url)
});



module.exports = router;