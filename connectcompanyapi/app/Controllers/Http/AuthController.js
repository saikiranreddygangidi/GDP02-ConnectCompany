'use strict'

class AuthController {
    async register({ request, response, auth }) {
        const data = request.post();
        console.log(data);
        try {
          const rules = {
            email: "required",
            code: "required",
            username: "required",
          };
    
          const validation = await validate(request.post(), rules);
    
          if (validation.fails()) {
            return response.badRequest({
              error: {
                status: 401,
                message:
                  "bad request, missing some required for register properties",
                fields: validation.messages(),
              },
            });
          }
    
          await User.create({
            email: data.email,
            code: data.code,
            username: data.username,
            role:"user"
          });
          return response.status(200).json({
            message: "Successfully registeredd in the data",
          });
        } catch (err) {
          return response.status(500).json({
            message: err,
          });
        }
      }
}

module.exports = AuthController
