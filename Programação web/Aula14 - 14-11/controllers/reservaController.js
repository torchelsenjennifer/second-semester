import dbKnex from '../dados/db_config.js'


export const reservaIndex = async (req, res) => {
    try {
        // obtém da tabela da reservas todos os registros 
        //e o endereço do imovel, tipo e valor do imovel
        const reservas = await dbKnex.select("r.*", "i.endereco", "i.tipo", "i.valor")
            .from("reservas as r")
            .innerJoin("imoveis as i", { "r.imovel_id" : "i.id" })
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
        res.status(400).json({ id: 0, msg: "Erro... informe nome, email e imovel_id da reserva" })
        return
    }

    const trx = await dbKnex.transaction()

    try { 
        // 1ª operação da transação
        const novo = await dbKnex('reservas')
        .insert({ nome, email, imovel_id })

        // 2ª operação da transação
        await trx("imoveis")
            .where({ id:imovel_id }).update({ status: "Reservado"})

        await trx.commit()
        res.status(201).send("Ok! Reserva confirmada com sucesso")

    } catch (error) {
        await trx.rollback()
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}



