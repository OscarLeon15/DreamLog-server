const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalSchema = new Schema({

 nameUser: String,
 numberOfFiles: Number,

})
const Personal = mongoose.model('converter', personalSchema)
module.exports = Personal;