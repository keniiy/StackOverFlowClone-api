const { successResponse, errorResponse } = require('../utils/helpers/response');
const { generateToken, decodeToken } = require('../utils/helpers/jwt')
const model = require('../../models')

module.exports = {
  async Signup(req, res) {
   try {
       const user = await model.User.create(req.body);
       const token = await generateToken(user);
       return successResponse(res, 201, {
           status: true,
           message: "Successfully created user",
           data: {
               user,
               token
           }
       });
    }  catch (error) {
        return errorResponse(res, 500, {
            status: false,
            message: 500
        });
    }
  },

  async SignIn(req, res, next) {
    try {
      return successResponse(res, 200, 'sign in');
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }
};