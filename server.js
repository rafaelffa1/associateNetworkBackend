var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var router = require('./app/router');
const cors = require('cors');

mongoose.Promise = global.Promise;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectionRoom', box => {
        socket.join(box);
    });
    console.log('Ok');
});

//URI: MLab
// mongoose.connect('mongodb://glemos:glau123@ds062448.mlab.com:62448/node-crud-api', {
//     useMongoClient: true
// });

mongoose.connect('mongodb://localhost:27017/node-crud-api', {
  useMongoClient: true
});

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./app/router'));

var port = process.env.port || 8000;
server.listen(port);
console.log("Iniciando a app na porta " + port);