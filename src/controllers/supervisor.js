const Supervisor = require('../models/Supervisor');

const controller = {};

controller.novo = async (req, res) => {
  try {
    await Supervisor.create(req.body);
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
    const dados = await Supervisor.find();
    res.send(dados);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.listarUm = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Supervisor.findById(id);
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
    const dados = await Supervisor.findByIdAndUpdate(id, req.body);
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
    const dados = await Supervisor.findByIdAndDelete(id);
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
