import dbKnex from '../data/db_config.js'

export const ListarAnimais = async (req, res) => { // obtém da tabela de animais todos os registros
  
  //const { nome, dono } = req.query

  try {
    // if(nome && dono ){
    //   const animais = await dbKnex("animais").whereILike('nome', `%${nome}%`).andWhereILike('dono', `%${dono}%`).orderBy("nome")
    //   res.status(200).json(animais)
    //   return
    // }
    // if (nome) {
    //   const animais = await dbKnex("animais").whereILike('nome', `%${nome}%`).orderBy("nome")
    //   res.status(200).json(animais)
    //   return
    // }
    // if (dono) {
    //   const animais = await dbKnex("animais").whereILike('dono', `%${dono}%`).orderBy("nome")
    //   res.status(200).json(animais)
    //   return
    // }
    const animais = await dbKnex.select("*").from("animais").orderBy("nome")
    res.status(200).json(animais)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//====================================================================================================================================
export const IncluirAnimais = async (req, res) => {

  const { tipo, nome, idade, raca, observacoes, dono, telefone } = req.body

  if (!tipo || !nome || !dono || !telefone) {
    res.status(400).json({ id: 0, msg: "Erro de preenchimento de campo... Por Favor, informe tipo, nome, dono, telefone" })
    return
  }

  try {
    const animal = await dbKnex('animais')
      .insert({ tipo, nome, idade, raca, observacoes, dono, telefone })
    res.status(201).json({ id: animal[0], msg: "Animal inserido com sucesso!" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: error.message })
  }
}

//========================================================================================================================================
export const AlterarAnimal = async (req, res) => {

  const { id } = req.params;
  const { tipo, nome, idade, raca, observacoes, dono, telefone } = req.body

  try {

    await dbKnex("animais").where({ id }).update({ tipo, nome, idade, raca, observacoes, dono, telefone })
    res.status(200).json({ id, msg: "Animal alterado com sucesso" })

  } catch (error) {
    res.status(400).json({ id: 0, msg: error.message })
  }
}

//==========================================================================================================================================
export const ExclusãoAnimal = async (req, res) => {

  const { id } = req.params;

  try {
    await dbKnex("animais").where({ id }).del() 
    res.status(200).json({ id, msg: "Animal retirado com sucesso!" })

  } catch (error) {
    res.status(400).json({ id, msg: error.message })
  }
}

//==========================================================================================================================================
export const PesquisaNomeAnimal = async (req, res) => {

  const { nome } = req.params

  try {

    const animal = await dbKnex("animais").whereLike('nome', `%${nome}%`)
    res.status(200).json(animal)

  } catch (error) {

    res.status(400).json({ msg: "Erro: " + error.message })

  }
}

//=========================================================================================================================================
export const PesquisaDonoAnimal = async (req, res) => {

  const { dono } = req.params

  try {

    const animal = await dbKnex("animais").whereLike('dono', `%${dono}%`)
    res.status(200).json(animal)

  } catch (error) {

    res.status(400).json({ msg: "Erro:" + error.message })

  }
}