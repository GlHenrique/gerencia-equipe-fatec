const express = require('express');
const cors = require('cors');
require('dotenv').config();
const IndexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', IndexRouter);

app.listen(2324);
