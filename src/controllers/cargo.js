const Cargo = require('../models/Cargo');

const controller = {};

controller.novo = async (req, res) => {
  try {
    await Cargo.create(req.body);
    // HTTP 201: Created
    res.status(201).end();
  } catch (erro) {
    console.log(erro);
    // HTTP 500: Internal Server Error
    res.status(500).send(erro);
  }
};

controller.listar = async (req, res) => {
  try {
    const dados = await Cargo.find();
    res.send(dados);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.listarUm = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cargo.findById(id);
    if (dados) {
      res.send(dados);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.editar = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cargo.findByIdAndUpdate(id, req.body);
    if (dados) {
      res.send(204);
    } else {
      res.status(400).json({
        error: 'Id não encontrado',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.excluir = async (req, res) => {
  const { id } = req.body;
  try {
    const dados = await Cargo.findByIdAndDelete(id);
    if (dados) {
      res.send(204);
    } else {
      res.status(400).json({
        error: 'Id não encontrado',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = controller;
