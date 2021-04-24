const validatorJs = require('validatorjs');
const { errorResponse } = require('../helpers/response');
const model = require('../../../models');

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

  async validateQue(req, res, next) {
    try {
      const { id } = req.params;
      const question = await model.Question.findOne({ _id: id });
      if (!question) {
        return errorResponse(res, 404, {
          status: false,
          message: 'Question does not exist'
        });
      }
      return next();
    } catch (error) {
      return errorResponse (res, 500, {
        status: false,
        message: 500
      });
    }
  }
};