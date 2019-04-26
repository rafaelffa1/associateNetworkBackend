
const Bets = require('../models/bet');

class BetsController {
  async store(req, res) {
    const bets = new Games();

    bets.game = req.body.game;
    bets.user = req.body.user;
    bets.placarTime1 = req.body.placarTime1;
    bets.placarTime2 = req.body.placarTime2;
    bets.valorAposta = req.body.valorAposta;

    Bets.create(req.body, function (error) {
      if (error) {
        res.send('Erro ao tentar salvar a aposta....: ' + error);
      }
      res.json({ message: 'Aposta Cadastrada com Sucesso!' });
    });
  }

  async getAllBet(req, res) {
    Bets.find({}, function (error, bet) {
      if (error) {
        res.send('Erro ao tentar Selecionar Todos os games...: ' + error);
      }
      res.json(bet);
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

module.exports = new BetsController();

