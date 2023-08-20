import dbKnex from '../data/db_config.js'

export const carroIndex = async (req, res) => {
  try {
    // obtém da tabela de carros todos os registros
    const carros = await dbKnex.select("*").from("carros")
    res.status(200).json(carros)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

export const carroStore = async (req, res) => {
  // atribui via desestruturação
  const { modelo, marca, ano, preco } = req.body

  if (!modelo || !marca || !ano || !preco) {
    res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
    return
  }

  try {
    //carros.push({ modelo, marca, ano, preco })
    const novo = await dbKnex('carros')
      .insert({ modelo, marca, ano, preco })

    // novo[0] => retorna o id do registro inserido                     
    res.satus(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
  }
}

export const carroUpdate = async (req, res) => {
  //  const id = req.params.id;
  const { id } = req.params;

  // atribui via desestruturação
  const { modelo, marca, ano, preco } = req.body

  if (!modelo || !marca || !ano || !preco) {
    res.status(400).json(
      {
        id: 0,
        msg: "Erro... informe modelo, marca, ano e preco do veículo"
      })
    return
  }

  // carros[id - 1].modelo = modelo
  // carros[id - 1].marca = marca
  // carros[id - 1].ano = ano
  // carros[id - 1].preco = preco

  try {
    await dbKnex("carros").where({ id })
      .update({ modelo, marca, ano, preco })

    res.status(200).json({ id, msg: "Ok! Alterado com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
  }
}

export const carroDelete = async (req, res) => {
  //  const id = req.params.id;
  const { id } = req.params;

  try {
    await dbKnex("carros").where({ id }).del()
    res.satus(200).json({ id, msg: "Ok! Excluído com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro... informe modelo, marca, ano e preco do veículo" })
  }
}

export const carroPesq = async (req, res) => {

  const { marca } = req.params

  try {

    // obtém da tabela de carros todos os registros da marca indicada

    const carros = await dbKnex("carros").whereLike('marca', marca)

    res.status(200).json(carros)

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }
}

export const carroIntervalo = async (req, res) => {

  const { from, to } = req.params

  try {

    // obtém da tabela de carros todos os registros da marca indicada

    const carros = await dbKnex("carros").whereBetween("ano", [from, to]).orderBy('ano')

    res.status(200).json(carros)

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }

}

export const carroModelo = async (req, res) => {

  const { modelo } = req.params

  try {

    // obtém da tabela de carros todos os registros da marca indicada

    const carros = await dbKnex("carros").whereLike('modelo', `%${modelo}%`)

    res.status(200).json(carros)

  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })

  }

}