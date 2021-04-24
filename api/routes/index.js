const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require('morgan');
const userAuthRoute = require('./userAuth')
const questionRoute = require('./question')

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to stack');
});

app.use('/user', userAuthRoute);
app.use('/question', questionRoute);

module.exports = app;