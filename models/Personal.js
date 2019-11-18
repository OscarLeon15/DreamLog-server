const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalSchema = new Schema({

nameUser: String,
numberOfFiles: Number,

},{
    timestamps: true
})
const Personal = mongoose.model('personal', personalSchema)
module.exports = Personal;