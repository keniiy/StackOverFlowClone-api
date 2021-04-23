const validatorJs = require('validatorjs');
const model = require('../../../models');
const { decodeToken } = require('../helpers/jwt');
const { errorResponse } = require('../helpers/response');

module.exports = {
    async validateSignUp(req, res, next) {
        const validator = new validatorJs(req.body, {
          password: 'required|min:6',
          email: 'required|email',
          firstName: 'required',
          lastName: 'required'
        });
    
        if (validator.fails()) {
            return errorResponse(res, 400, {
                status: false,
                message: validator.errors.all()
            });
        }

        try {
          const user = await model.User.findOne({
              email: req.body.email
          })
          if (!user) {
            return next();
          }
          return errorResponse( res, 400, {
              status: false,
              message: 'User already registered with email',
          }
          );
        } catch (error) {
            return errorResponse(res, 500, {
                status: false,
                message: 500
            });
        }
      },

    validatePassword(req, res, next) {
        const { password } = req.body;
        console.log(password);
        const regex = /[^a-z/A-z]+/;
        if (regex.exec(password) !== null) {
          return next();
        }
        const allErrors = {
          password: ['Password must have a special character'],
        };
        return errorResponse(res, 400, {
            message: false,
            message: allErrors
        });
      },

      ValidateSignIn(req, res, next) {
        const validator = new validatorJs(req.body, {
          password: 'required',
          email: 'required|email'
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