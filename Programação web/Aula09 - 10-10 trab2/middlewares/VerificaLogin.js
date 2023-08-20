import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv'
dotenv.config()

export const verificaLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    console.log(decode)
    req.id_administrador = decode.id_administrador
    req.nome_administrador = decode.nome_administrador
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).send({ erro: "Falha na autenticação" })
  }
}