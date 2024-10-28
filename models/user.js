const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongoprep");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    image: String
})

module.exports = mongoose.model('user', userSchema);