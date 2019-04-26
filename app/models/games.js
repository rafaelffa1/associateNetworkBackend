var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamesSchema = new Schema({
    nomeTime1: String,
    nomeTime2: String,
    campeonato: String,
    dataHora: Date,
    numeroDesafio: Number
});

module.exports = mongoose.model('Games', GamesSchema);