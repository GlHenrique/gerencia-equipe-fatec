const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database');

db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nikss.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const IndexRouter = require('./routes/index');
const StatusProjeto = require('./routes/status-projeto');
const TipoProjeto = require('./routes/tipo-projeto');
const Cargo = require('./routes/cargo');
const Supervisor = require('./routes/supervisor');
const Lider = require('./routes/lider');
const Funcionario = require('./routes/funcionario');
const Projeto = require('./routes/projeto');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', IndexRouter);

app.use('/tipo-projeto', TipoProjeto);
app.use('/status-projeto', StatusProjeto);
app.use('/cargo', Cargo);
app.use('/supervisor', Supervisor);
app.use('/lider', Lider);
app.use('/funcionario', Funcionario);
app.use('/projeto', Projeto);

app.listen(2324);
