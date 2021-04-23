const express = require('express');
const validation = require('../utils/validation/userAuth')
const controller = require('../controllers/userAuth');


const Router = express.Router();

Router.post('/Signup', 
    validation.validateSignUp,
    validation.validatePassword,
    controller.Signup
)

Router.post('/SignIn',
controller.SignIn
)

module.exports = Router