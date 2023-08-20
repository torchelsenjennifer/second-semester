import dbKnex from '../dados/db_config.js'

export const passageiroIndex = async (req, res) => {
  try {
    // obtém da tabela passageiro todos os registros
    const passageiro = await dbKnex.select("*").from("passageiro")
    res.status(200).json(passageiro)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//========================================================================================================
export const passageiroStore = async (req, res) => {

  // atribui via desestruturação
  const { nome, telefone, data_nascimento, email } = req.body

  // se não informou estes atributos
  if (!nome || !telefone || !data_nascimento || !email) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, telefone, data de nascimento e email" })
    return
  }

  try {
    const novo = await dbKnex('Passageiro').insert({ nome, telefone, data_nascimento, email })
    // novo[0] => retorna o id do registro inserido                     
    res.status(201).json({ id: novo[0], msg: "Ok! Passageiro inserido com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//============================================================================================================
export const passageiroUpdate = async (req, res) => {
  //  const id = req.params.id;
  const { id } = req.params;

  // atribui via desestruturação
  const { nome, telefone, data_nascimento, email } = req.body

  if (!nome || !telefone || !data_nascimento || !email) {
    res.status(400).json(
      {
        id: 0,
        msg: "Erro... informe nome, telefone, data de nascimento e email"
      })
    return
  }

  try {
    await dbKnex("passageiro").where({ id })
      .update({ nome, telefone, data_nascimento, email })

    res.status(200).json({ id, msg: "Ok! Alterado com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//=======================================================================================================================
export const passageiroDelete = async (req, res) => {
  //  const id = req.params.id;
  const { id } = req.params;

  try {
    await dbKnex("passageiro").where({ id }).del()
    res.status(200).json({ id, msg: "Ok! Passageiro excluído com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

 //=======================================================================================================================
export const passageiroPesq = async (req, res) => {

  const { nome } = req.params

  try {
    // obtém da tabela de passageiro todos os registros de nome indicada
    const pesquisa = await dbKnex("Passageiro").whereLike('nome', `%${nome}%`)
    res.status(200).json(pesquisa)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//======================================================================================================
export const passageiroTotal = async (req, res) => {
  try {
    // obtém da tabela de candidatas todos os registros
    const consulta = await dbKnex("passageiro").count({totalPassageiros: "*"})
    res.status(200).json(consulta[0])
} catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}