const validatorJs = require('validatorjs');
const { errorResponse } = require('../helpers/response');

module.exports = {
  
  async validateAskQue(req, res, next) {
    const validator = new validatorJs(req.body, {
      grade: 'required|string',
      category: 'required|string',
      question: 'required|string',
    });

    if (validator.fails()) {
      return errorResponse(res, 400, {
          status: false,
          message: validator.errors.all()
      });
    }
    return next();
  },
};