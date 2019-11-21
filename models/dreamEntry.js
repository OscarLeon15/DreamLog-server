const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamEntrySchema = new Schema({
  dreamText: {
    type: String,
    // required: false
  },
  dreamName: {
    type: String
  }
},

  {
    timestamps: true
  });


const dreamEntry = mongoose.model("dreamEntry", dreamEntrySchema);
module.exports = dreamEntry;