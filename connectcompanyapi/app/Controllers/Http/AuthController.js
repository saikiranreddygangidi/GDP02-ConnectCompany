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
      async login({ request, response, auth }) {
        const userinfo = request.only(["username", "code"]);
        const rules = {
          username: "required",
          code: "required",
        };
    
        const validation = await validate(userinfo, rules);
    
        if (validation.fails()) {
          return response.badRequest({
            error: {
              status: 401,
              message: "bad request, missing some required for connectcompony",
              fields: validation.messages(),
            },
          });
        }
        
        userinfo.code = decryptedData;
        console.log("userinfo ", userinfo);
        const user = await User.query()
          .where("username", userinfo.username)
          .where("code", userinfo.code)
          .fetch();
    
        if (user.rows.length > 0) {
          const user = await User.findBy({ username: userinfo.username });
          console.log("--------------------",user);
          let jwtToken = await auth.generate(user);
    
          return response.status(200).json({
            message: "authenticated",
            data: user,
            token: jwtToken.token,
          });
        } else {
          return response.status(500).json({
            message: "unauthenticated user",
          });
        }
      }
}

module.exports = AuthController
