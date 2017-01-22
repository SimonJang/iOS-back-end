// Mongoose model voor reservatie

var mongoose = require('mongoose');

var ReservatieSchema = new mongoose.Schema({
    hash: String,
    datum: String,
    email: String,
    storeID: String,
    termijn: String,
    springkasteel: String
});

mongoose.model('Reservatie', ReservatieSchema);

module.exports = mongoose;
