// Mongoose model voor winkel

var mongoose = require('mongoose');

var WinkelSchema = new mongoose.Schema({
    naam: String,
    adres: String,
    telefoonnummer: String,
    storeID: String,
    JUNGLE: Number,
    PIRAAT: Number,
    CIRCUS: Number,
    JUMP: Number,
});

mongoose.model('Winkel', WinkelSchema);

module.exports = mongoose;
