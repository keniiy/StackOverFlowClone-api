const { successResponse, errorHelper } = require('../utils/helpers/response');

module.exports = {
  async createUser(req, res) {
   try {
      return successResponse(res, 201, 'create user');
    } catch (error) {
      return errorHelper(res, 500, error.message);
    }
  },
  async loginUser(req, res, next) {
    try {
      return successResponse(res, 200, 'sign in');
    } catch (error) {
      return errorHelper(res, 500, error.message);
    }
  }
};