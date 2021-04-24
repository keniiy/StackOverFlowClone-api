const model = require('../../models')
const { successResponse, errorResponse } = require('../utils/helpers/response');

module.exports = {

  async askQue(req, res) {
    try {
      const { grade, category, question } = req.body;
      const { user } = req;
      console.log(grade, category, question, user._id);
      const saveQuestion = await model.Question.create ({
        grade,
        category,
        question,
        userId: user._id
      });
      return successResponse(res, 200, {
        status: true,
        message: 'Successfully Posted Question',
        data: saveQuestion
      });
    } catch (error) {
      return errorResponse(res, 500, {
        status: true,
        message: 500
      });
    }
  },

  async getAllQue(req, res) {
    try {
      const allQue = await model.Question.find({});
      if (allQue.length > 0) {
        return successResponse(res, 200, {
          status: true,
          message: 'Successfully Fetched All Question',
          data: allQue
        });
      }
      successResponse(res, 200, 'No questions available at this time');
    } catch (error) {
      return errorResponse(res, 500, {
        status: false,
        message: 500
      });
    }
  },
};