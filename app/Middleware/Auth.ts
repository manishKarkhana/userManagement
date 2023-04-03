const jwt = require('jsonwebtoken');
import Users from "App/Models/Users";

const auth = async (request, response, next) => {
  try {
    const token = request.cookie.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
    console.log(verifyUser);

  } catch (error) {
    response.status(401).send(error)
  }
}
module.exports = {
  auth
}