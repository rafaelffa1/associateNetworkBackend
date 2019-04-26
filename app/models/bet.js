var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BetSchema = new Schema({
    game: String,
    user: String,
    placarTime1: String,
    placarTime2: String,
    valorAposta: Number
});

module.exports = mongoose.model('Bet', BetSchema);