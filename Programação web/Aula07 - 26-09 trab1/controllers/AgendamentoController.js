import dbKnex from '../data/db_config.js'

export const ListarAgendamentos = async (req, res) => {

    try {
        const reserva = await dbKnex.select([
            "agendamentos.id",
            "agendamentos.id_animal",
            "agendamentos.id_servico",
            "agendamentos.reserva",
            "agendamentos.observacao",
            "animais.nome as nome_animal",
            "animais.observacoes as observacoes_animal",
            "servicos.nome as nome_servico",
            "servicos.preco as preco_servico"
        ]).from("agendamentos")
            .join("animais", "id_animal", "=", "animais.id")
            .join("servicos", "id_servico", "=", "servicos.id")

        //   const teste = new Date(agenda[0].reserva)// objeto data
        //   console.log(teste.toLocaleString('pt-BR')) // Formata e apresenta

        res.status(200).json(agenda)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

export const IncluirAgendamento = async (req, res) => {

    const { id_animal, id_servico, reserva, observacao } = req.body

    if (!id_animal || !id_servico || !reserva) {
        res.status(400).json({ id: 0, msg: "Erro de preenchimento de campo... Por Favor, informe tipo, nome, dono, telefone" })
        return
    }

    try {
        const agenda = await dbKnex('agendamentos')
            .insert({ id_animal, id_servico, reserva, observacao })
        res.status(201).json({ id: agenda[0], msg: "Agendamento inserido com sucesso!" })

    } catch (error) {
        res.status(400).json({ id: 0, msg: error.message })
    }
}