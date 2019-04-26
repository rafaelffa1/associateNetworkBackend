var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nome: String,
    usuario: String,
    senha: String,
});

module.exports = mongoose.model('Users', UserSchema);