const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const converterOcrSchema = new Schema({

 fileType: String,
 parsedText: String,

})
const ConverterOcr = mongoose.model('converterOcr', converterOcrSchema)
module.exports = ConverterOcr;
