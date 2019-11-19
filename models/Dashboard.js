const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const dashboardSchema = new Schema({

parsedText: String,

})
const dashboard = mongoose.model('dashboard', dashboardSchema)
module.exports = dashboard;
