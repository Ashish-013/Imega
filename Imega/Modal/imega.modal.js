const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
    filename: String,
    url: String,
    size:String,
    type:String 
  });
 module.exports = mongoose.model('imega', fileSchema);