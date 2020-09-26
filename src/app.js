const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database');

db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nikss.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const IndexRouter = require('./routes/index');
const StatusProjeto = require('./routes/status-projeto');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', IndexRouter);
app.use('/status-projeto', StatusProjeto);

app.listen(2324);
