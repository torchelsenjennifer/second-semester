import dbKnex from '../dados/db_config.js'

export const reservaIndex = async (req, res) => {
  try {
    // obtém da tabela de reservas todos os registros 
    // e o endereço, tipo e valor do imóvel
    const reservas = await dbKnex.select("r.*", "i.endereco", "i.tipo", "i.valor")
      .from("reservas as r")
      .innerJoin("imoveis as i", { "r.imovel_id": "i.id" })
    res.status(200).json(reservas)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

export const reservaStore = async (req, res) => {

  // atribui via desestruturação
  const { nome, email, imovel_id } = req.body

  // se não informou estes atributos
  if (!nome || !email || !imovel_id) {
    res.status(400).json({ id: 0, 
         msg: "Erro... informe nome, email e imovel_id da reserva" })
    return
  }

  // define (inicia) uma nova transação
  const trx = await dbKnex.transaction()

  try {
    // 1ª operação da transação (insere um registro em reservas)
    const novo = await trx('reservas')
           .insert({ nome, email, imovel_id })

    // 2ª operação da transação (altera o status do imóvel)
    await trx("imoveis")
      .where({ id: imovel_id }).update({ status: 'Reservado'})

    // commit (grava) a transação
    await trx.commit()

    res.status(201).send("Ok! Reserva realizada com sucesso")
  } catch (error) {
    // rollback (volta) desfaz a operação realizada
    await trx.rollback()

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}