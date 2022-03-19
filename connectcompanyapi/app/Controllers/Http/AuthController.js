"use strict";
const { validate } = use("Validator");

const User = use("App/Models/User");
const crypto = require("crypto");

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
        role: "user",
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
    if (!userinfo.username || !userinfo.code) {
      console.error(
        "AuthController-login, missing required attributes: email/password"
      );
      return response.status(400).json({
        error: {
          status: 400,
          message: "bad request, username and code are required",
        },
      });
    }

    const Securitykey = "82f2ceed4c503896c8a291e560bd4325";
    const initVector = "sinasinasisinaaa";
    const algorithm = "aes-256-cbc";

    const decipher = crypto.createDecipheriv(
      algorithm,
      Securitykey,
      initVector
    );

    // let decryptedData = decipher.update(userinfo.code, "base64", "utf-8");

    // decryptedData += decipher.final("utf8");

    // userinfo.code = decryptedData;
    console.log("userinfo ", userinfo);
    const user = await User.query()
      .where("username", userinfo.username)
      .where("code", userinfo.code)
      .fetch();

    console.log(user, "user details");

    if (user.rows.length > 0) {
      const user = await User.findBy({ username: userinfo.username });
      console.log("--------------------", user);
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

module.exports = AuthController;
