const mongoose = require('mongoose');
  // Part #2 Point 6 
mongoose.connect('mongodb+srv://priyanka:aadhav@cluster0.pc4p2.mongodb.net/LibDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdatas',BookSchema);

module.exports = bookdata;