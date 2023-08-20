import dbKnex from '../data/db_config.js'
import bcrypt from 'bcrypt'

const saltRounds = 10;

export const clienteIndex = async (req, res) => {
  try {
    // obtém da tabela de carros todos os registros
    const clientes = await dbKnex.select("*").from("clientes").orderBy("nome")
    res.status(200).json(clientes)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

export const clienteStore = async (req, res) => {
  // atribui via desestruturação
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, email, senha" })
    return
  }
  const salt = bcrypt.genSaltSync(saltRounds);
  //console.log(hash)
  const hash = bcrypt.hashSync(senha, salt);

  try {
    //carros.push({ modelo, marca, ano, preco })
    const cliente = await dbKnex('clientes')
      .insert({ nome, email, senha })

    // novo[0] => retorna o id do registro inserido                     
    res.status(201).json({ id: cliente[0], msg: "Ok! Inserido com sucesso" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: error.message })
  }
}

// export const clienteUpdate = async (req, res) => {
//   //  const id = req.params.id;
//   const { id } = req.params;

//   // atribui via desestruturação
//   const { nome, email, senha } = req.body

//   if (!nome || !email || !senha ) {
//     res.status(400).json(
//       {
//         id: 0,
//         msg: "Erro... informe nome, emaol e senha"
//       })
//     return
//   }}

// carros[id - 1].modelo = modelo
// carros[id - 1].marca = marca
// carros[id - 1].ano = ano
// carros[id - 1].preco = preco

//   try {
//     await dbKnex("carros").where({ id })
//       .update({ modelo, marca, ano, preco })

//     res.status(200).json({ id, msg: "Ok! Alterado com sucesso" })
//   } catch (error) {
//     res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
//   }
// }

// export const carroDelete = async (req, res) => {
//   //  const id = req.params.id;
//   const { id } = req.params;

//   try {
//     await dbKnex("carros").where({ id }).del()
//     res.satus(200).json({ id, msg: "Ok! Excluído com sucesso" })
//   } catch (error) {
//     res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
//   }
// }

export const clientePesqNome = async (req, res) => {

  const { nome } = req.params

  try {

    const cliente = await dbKnex("clientes").whereLike('nome', `%${nome}%`)

    res.status(200).json(cliente)

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }
}

export const clientePesqEmail = async (req, res) => {

  const { email } = req.params

  try {

    const cliente = await dbKnex("clientes").whereLike('email', email)

    res.status(200).json(cliente)

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }
}

export const ClinteCorreto = async (req, res) => {

  const { email, senha } = req.body

  try {

    const cliente = await dbKnex("clientes").where({ email })
    // console.log('jennifer',cliente[0])

    if (cliente.length == 0) {
      res.status(200).json({ msg: "Email não encontrado" })
    }
    if (senha == cliente[0].senha) {
      res.status(200).json({ msg: "Senha correta!" })
    }
    res.status(200).json({ msg: "Senha Incorreta!" })

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }
}
// export const carroIntervalo = async (req, res) => {

//   const { from, to } = req.params

//   try {

//     // obtém da tabela de carros todos os registros da marca indicada

//     const carros = await dbKnex("carros").whereBetween("ano", [from, to]).orderBy('ano')

//     res.status(200).json(carros)

//   } catch (error) {

//     res.status(400).json({ id: 0, msg: "Erro: " + error.message })

//   }

// }

// export const carroModelo = async (req, res) => {

//   const { modelo } = req.params

//   try {

//     // obtém da tabela de carros todos os registros da marca indicada

//     const carros = await dbKnex("carros").whereLike('modelo', `%${modelo}%`)

//     res.status(200).json(carros)

//   } catch (error) {

//     res.status(400).json({ id: 0, msg: "Erro: " + error.message })

//   }

// }