var express = require('express');
var router = express.Router();
var GamesController = require('./controllers/GamesController');
var UsersController = require('./controllers/UsersController');

router.use(function (req, res, next) {
  console.log('Algo está acontecendo aqui....');
  next();
});

router.get('/', function (req, res) {
  res.json({ message: 'Beleza! Bem vindo(a) a API' })
});


router.post('/api/users', UsersController.store);
router.get('/api/users/all', UsersController.getAllUsers);

router.post('/api/games', GamesController.store)
router.get('/api/games/all', GamesController.getAllGames);
//router.get('/games/:games_id', GamesController.getGame);

module.exports = router;