const jwt = require("jsonwebtoken");
const user = require('../services/user')
require('dotenv').config()

function authMiddleware(roles = []) {
  return (req, res, next) => {
    const authorization = req.headers["authorization"];
    const token = authorization.split(' ')[1]
  
    if (!token) {
      return res.status(400).json({ mensagem: "Token não fornecido" });
    }

    jwt.verify(token, process.env.JWT_PASS, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensagem: "Token inválido" });
      }

      const userLogged = await user.findUser(decoded.id)

      if (!userLogged) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      if (roles.length && !roles.includes(userLogged.permissao)) {
        return res.status(403).json({ mensagem: "Sem permissão" });
      }

      req.session = decoded;

      next();
    });
  }
}

module.exports = authMiddleware;