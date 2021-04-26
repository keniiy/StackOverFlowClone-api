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

router.post('/questionDownVote/:id',
    userValidators.validateUserToken,
    validation.validateQue,
    controller.downVoteQue
);

router.post('/answer/:id',
    userValidators.validateUserToken,
    controller.answerQuestion
);

router.post('/answerUpVote/:id',
    userValidators.validateUserToken,
    controller.upVoteAnswer
);

router.post('/answerDownVote/:id',
    userValidators.validateUserToken,
);

module.exports = router;