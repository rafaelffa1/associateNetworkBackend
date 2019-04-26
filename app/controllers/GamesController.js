
const Games = require('../models/games');

class GamesController {
  async store(req, res) {
    const games = new Games();

    games.nomeTime1 = req.body.nome;
    games.nomeTime2 = req.body.preco;
    games.campeonato = req.body.descricao;
    games.dataHora = req.body.datahora;

    Games.create(req.body, function (error) {
      if (error) {
        res.send('Erro ao tentar salvar o Game....: ' + error);
      }
      res.json({ message: 'Game Cadastrado com Sucesso!' });
    });
  }

  async getAllGames(req, res) {
    Games.find({}, function (error, games) {
      if (error) {
        res.send('Erro ao tentar Selecionar Todos os games...: ' + error);
      }
      res.json(games);
    });
  }

  // async getGame(req, res) {
  //   Produto.findById(req.params.produto_id, function (error, produto) {
  //     if (error)
  //       res.send('Id do Produto não encontrado....: ' + error);

  //     res.json(produto);
  //   });
  // }

  // async updateProduct(req, res) {
  //   Produto.findById(req.params.produto_id, function (error, produto) {
  //     if (error)
  //       res.send("Id do Produto não encontrado....: " + error);

  //     produto.nome = req.body.nome;
  //     produto.preco = req.body.preco;
  //     produto.descricao = req.body.descricao;

  //     produto.save(function (error) {
  //       if (error)
  //         res.send('Erro ao atualizar o produto....: ' + error);

  //       res.json({ message: 'Produto atualizado com sucesso!' });
  //     });
  //   });
  // }

  // async deleteProducts(req, res) {
  //   Produto.remove({ _id: req.params.produto_id }, function (error) {
  //     if (error) {
  //       res.send("Id do Produto não encontrado....: " + error);
  //     }
  //     res.json({ message: 'Produto Excluído com Sucesso!' });
  //   });
  // }
}

module.exports = new GamesController();

