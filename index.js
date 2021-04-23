// const express = require('express');
// const app = express();

// app.listen(4000, function()
// {console.log(`server is running on port 4000`)});

// module.export = app;ca

// import express from 'express'

// const app = express();

// app.listen(4000,()=> console.log(`Server is running on port 4000`));

// module.exports = app;

const server = require('./api/routes/index');

const db = require('./config/mongoDb');

const Port = process.env.PORT || 3000;

db()
  .then(() => {
    console.log('mongo_db database is connected');
  })
  .catch(err => {
    console.log(err);
  });

server.listen(Port, () => console.log(`Server running on port ${Port}`));