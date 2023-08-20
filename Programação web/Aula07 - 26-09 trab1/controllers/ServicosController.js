import dbKnex from '../data/db_config.js'

export const ListarServiço = async (req, res) => { // obtém da tabela de carros todos os registros

  try {
    const servicos = await dbKnex.select("*").from("servicos")
    res.status(200).json(servicos)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//===============================================================================================================
export const IncluirServiços = async (req, res) => {

  const { nome, descricao, preco, imagem } = req.body

  if (!nome || !descricao || !preco || !imagem) {
    res.status(400).json({ id: 0, msg: "Erro de preenchimento de campo... Por Favor, informe nome" })
    return
  }

  try {

    const servico = await dbKnex('servicos').insert({ nome, descricao, preco, imagem })
    res.status(201).json({ msg: "Serviço inserido com sucesso!" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: error.message })
  }
}

//===============================================================================================================
export const AlterarServiços = async (req, res) => {

  const { id } = req.params;
  const { nome, descricao, preco, imagem } = req.body

  try {

    await dbKnex("servicos").where({ id }).update({ nome, descricao, preco, imagem })
    res.status(200).json({ id, msg: "Serviço alterado com sucesso" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: error.message })
  }
}

//================================================================================================================
export const ExclusãoServiço = async (req, res) => {

  const { id } = req.params;

  try {
    await dbKnex("servicos").where({ id }).del()
    res.status(200).json({ id, msg: "Serviço retirado com sucesso!" })

  } catch (error) {
    res.status(400).json({ id, msg: error.message })
  }
}

//=============================================================================================================
export const PesquisaNomeServiço = async (req, res) => {

  const { nome } = req.params

  try {

    const servico = await dbKnex("servicos").whereLike('nome', `%${nome}%`)
    res.status(200).json(servico)

  } catch (error) {

    res.status(400).json({ msg: "Erro: Não há" + error.message })

  }
}
