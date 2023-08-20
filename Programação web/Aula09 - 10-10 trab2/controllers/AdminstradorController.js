import dbKnex from '../dados/db_config.js'
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const adminIndex = async (req, res) => {
  try {
    // obtém da tabela de clientes todos os registros (em ordem de nome)
    const admins = await dbKnex.select("*").from("administrador").orderBy("nome")
    res.status(200).json(admins)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//=======================================================================================================================
export const adminStore = async (req, res) => {
  // atribui via desestruturação
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, email e senha do Admin" })
    return
  }

  // .length: retorna o tamanho da string (da senha)
  if (senha.length < 8) {
    res.status(400).json({ id: 0, msg: "Erro... senha deve possuir, no mínimo, 8 caracteres" })
    return
  }

  // contadores
  let pequenas = 0
  let grandes = 0
  let numeros = 0
  let simbolos = 0

  // senha = "abc123"
  // letra = "a"

  // percorre as letras da variável senha
  for (const letra of senha) {
    // expressão regular
    if ((/[a-z]/).test(letra)) {
      pequenas++
    }
    else if ((/[A-Z]/).test(letra)) {
      grandes++
    }
    else if ((/[0-9]/).test(letra)) {
      numeros++
    } else {
      simbolos++
    }
  }

  if (pequenas == 0 || grandes == 0 || numeros == 0 || simbolos == 0) {
    res.status(400).json({ id: 0, msg: "Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos" })
    return
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  // console.log(salt)

  const hash = bcrypt.hashSync(senha, salt);
  // console.log(hash)

  try {
    const novo = await dbKnex('administrador')
      .insert({ nome, email, senha: hash })

    // novo[0] => retorna o id do registro inserido                     
    res.status(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}