
const Users = require('../models/users');

class UsersController {
  async store(req, res) {
    const users = new Users();

    users.nome = req.body.nome;
    users.usuario = req.body.preco;
    users.senha = req.body.descricao;

    Users.create(req.body, function (error) {
      if (error) {
        res.send('Erro ao tentar salvar o Game....: ' + error);
      }
      res.json({ message: 'Usuario Cadastrado com Sucesso!' });
    });
  }

  async getAllUsers(req, res) {
    Users.find({}, function (error, users) {
      if (error) {
        res.send('Erro ao tentar Selecionar Todos os users...: ' + error);
      }
      res.json(users);
    });
  }

  async login(req, res) {
    Users.find({}, function (error, users) {
      if (error) {
        res.send('Erro ao tentar Selecionar Todos os users...: ' + error);
      }
      res.json(users);
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

module.exports = new UsersController();

