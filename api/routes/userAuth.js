const express = require('express');
const validation = require('../utils/validation/userAuth')
const controller = require('../controllers/userAuth')

const Router = express.Router();

Router.post('/Signup', 
controller.createUser 
)

Router.post('/SignIn',
controller.loginUser
)

module.exports = Router