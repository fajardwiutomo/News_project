const { User } = require('../models')
const axios = require('axios')

class Controller {
    static async register (req, res, next){
        try {
            const { username, email, password } = req.body;
            const result = await User.create({
              username,
              email,
              password,
              role: "Admin",
            });
            res.status(201).json({ id: result.id, email: result.email });
          } catch (error) {
            next(error);
          }
    }

    static async login (req, res, next) {
      try {
        const { email, password }  = req.body

        if (!email, !password) {
          throw {
            code: 400,
            name: "Unauthorized",
            message: "Email or Password must filled"
          }
        }

        const emailFound = await User.findOne({
          where: {
            email,
          }
        })

        if(!emailFound) {
          throw {
            code: 401,
            name: "Unauthorized",
            message: "Invalid username, email or password",
          };
        } else {
          const compare = comparePass(password, emailFound.password);

          if (!compare) {
            throw {
              code: 401,
              name: "Unauthorized",
              message: "Invalid username, email or password",
            };
          } else {
            const payload = {
              id: emailFound.id,
            };
  
            //buat token
            const token = tokenPayload(payload);
            // next();
  
            res.status(200).json({
              access_token: token,
            });
          }
        }
 
      } catch (error) {
        next(error)
      }
    }


    static async getNews(req, res, next){
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb32f43437e2453d928685c787c85348'
        })
        const hasil = response.data
        console.log(hasil)
        res.status(200).json(hasil)
      } catch (error) {
        next(error)
      }
    }
}

module.exports = Controller