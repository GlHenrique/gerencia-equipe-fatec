const axios = require('axios').default;
const Projeto = require('../models/Projeto');

const controller = {};

controller.verificaLider = async (req, res, next) => {
  if (!req.body.lider) {
    return res.status(400).json({
      error: 'Informe o líder do projeto',
    });
  }
  const { data } = await axios.get(`http://localhost:2324/funcionario/${req.body.lider}`);
  const cargoLider = data.cargo.nome;
  if (cargoLider === 'Líder') {
    return next();
  }
  return res.status(400).json({
    error: 'Funcionário deve ser líder',
  });
};

controller.verificaSupervisor = async (req, res, next) => {
  if (!req.body.supervisor) {
    return res.status(400).json({
      error: 'Informe o supervisor do projeto',
    });
  }
  const { data } = await axios.get(`${process.env.BASEURL}/funcionario/${req.body.supervisor}`);
  const cargoSupervisor = data.cargo.nome;
  if (cargoSupervisor === 'Supervisor') {
    return next();
  }
  return res.status(400).json({
    error: 'Funcionário deve ser supervisor',
  });
};

controller.novo = async (req, res) => {
  try {
    await Projeto.create(req.body);
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
    const dados = await Projeto
      .find()
      .populate('integrantes', ['nome', 'cargo'], 'Funcionario')
      .populate('lider', 'nome', 'Funcionario')
      .populate('supervisor', 'nome', 'Funcionario')
      .populate('tipo', null, 'TipoProjeto')
      .populate('status', null, 'StatusProjeto');
    res.send(dados);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.listarUm = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Projeto.findById(id);
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
    const dados = await Projeto.findByIdAndUpdate(id, req.body);
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
    const dados = await Projeto.findByIdAndDelete(id);
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
