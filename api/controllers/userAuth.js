const { successResponse, errorResponse } = require('../utils/helpers/response');
const { generateToken, decodeToken } = require('../utils/helpers/jwt')
const model = require('../../models/index')

module.exports = {
  async Signup(req, res) {
   try {
       const user = await model.User.create(req.body);
       const token = await generateToken(user);
       return successResponse(res, 201, "Successfully created user", {
               user,
               token
           });
    }  catch (error) {
        return errorResponse(res, 500, error.message);
    }
  },

  async SignIn(req, res, next) {
    try {
        const user = await model.User.findOne({ email: req.body.email }).select(
          '+password'
        );
  
        if (!user) {
          return errorResponse(res, 401, 'Password or UserName is incorrect');
        }
        const confirm = user.comparePassword(req.body.password);
        if (!confirm) {
          return errorResponse(res, 401, 'Invalid credentials');
        }
        const token = await generateToken(user);
        
        const userInfo = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          };

        return successResponse(res, 200, 'successfully logged in', {
              userInfo,
              token
        });
      } catch (error) {
        return errorResponse(res, 500, error.message);
      }
    },

};