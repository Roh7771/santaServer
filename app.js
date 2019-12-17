const express = require('express');
const cors = require('cors');
const answerRouter = require('./routes/answerRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/answer', answerRouter);

module.exports = app;