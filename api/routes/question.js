const express = require('express');
const controller = require('../controllers/question');
const validation = require('../utils/validation/question');
const userValidators = require('../utils/validation/userAuth');

const router = express.Router();

router.post('/askQuestion',
    userValidators.validateUserToken,
    validation.validateAskQue,
    controller.askQue
);

router.get('/',
    controller.getAllQue
);

router.post('/questionUpVote/:id',
    userValidators.validateUserToken,
    validation.validateQue,
    controller.upVoteQue
);

router.post('/questionUpVote/:id',
    userValidators.validateUserToken,
    validation.validateQue,
    controller.downVoteQue
);

module.exports = router;