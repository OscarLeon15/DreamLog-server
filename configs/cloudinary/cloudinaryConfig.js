const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

let imgStorage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'file-converter-project-3', // The name of the folder in cloudinary
  allowedFormats: ['PDF', 'GIF', 'PNG', 'JPG', 'TIF', 'BMP'],
  // allowedFormats: ['jpg', 'png', 'jpeg'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: imgStorage });

module.exports = uploadCloud;