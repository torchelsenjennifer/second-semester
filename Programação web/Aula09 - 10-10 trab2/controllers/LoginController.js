import dbKnex from '../dados/db_config.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv'
dotenv.config()


//=======================================================================================================================
export const loginAdmin = async (req, res) => {
    // faz a desestruturação do objeto req.body
    const { email, senha } = req.body;

    // validação para os campos
    if (!email || !senha) {
        console.log("login e senha não preenchidos");
        res.status(400).json({ erro: "Login ou senha incorretos" });
        return;
    }

    // verifica se o e-mail já está cadastrado
    try {
        const dados = await dbKnex("administrador").where({ email });

        if (dados.length == 0) {
            console.log("Usuário não encontrado!")
            res.status(400).json({ erro: "Login ou senha incorretos" });
            return;
        }

        // compara a senha informada com a senha do cadastro (criptografados)
        if (bcrypt.compareSync(senha, dados[0].senha)) {
            console.log("Senha correta!")
            const token = jwt.sign({
                id_administrador: dados[0].id,
                nome_administrador: dados[0].nome,
            }, process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
            )

            res.status(200).json({ msg: "Ok! Acesso Liberado", token });
        } else {
            console.log("Senha incorreta!")
            res.status(400).json({ erro: "Login ou senha incorretos" });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
}