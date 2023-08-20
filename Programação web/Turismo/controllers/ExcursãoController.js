
import dbKnex from '../dados/db_config.js'

export const excursaoIndex = async (req, res) => {
    try {
        // obtém da tabela excursão todos os registros
        const excursao = await dbKnex.select("*").from("excursao")
        res.status(200).json(excursao)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

//========================================================================================================================

export const excursaoStore = async (req, res) => {

    const foto = req.file.path; // obtém o caminho do arquivo no server

    if ((req.file.mimetype != "image/jpeg" && req.file.mimetype != "image/png") || req.file.size > 1024 * 1024) {
        fs.unlinkSync(foto); // exclui o arquivo do servidor
        console.log("problema img");
        res
            .status(400)
            .json({ msg: "Formato inválido da imagem ou imagem muito grande" });
        return;
    }

    // atribui via desestruturação
    const { local_partida, destino, lugares_total, veiculo, data_partida, data_chegada, id_administrador } = req.body
    console.log(req.body);

    // se não informou estes atributos
    if (!local_partida || !destino || !lugares_total || !veiculo || !data_partida || !data_chegada || !foto) {
        console.log("faltou dados ");
        res.status(400).json({ id: 0, msg: "Erro... informe local de partida, destino, total de lugares, veículos, data da partida, data da chegada e foto" })
        return
    }

    try {
        const novo = await dbKnex('Excursao').insert({
            local_partida,
            destino,
            lugares_total,
            veiculo,
            data_partida,
            data_chegada,
            foto,
            id_administrador
        })
        // novo[0] => retorna o id do registro inserido                     
        res.status(201).json({ id: novo[0], msg: "Ok! Excursão inserida com sucesso" })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}
//=======================================================================================================================

export const excursaoUpdate = async (req, res) => {
    //  const id = req.params.id;
    const { id } = req.params;

    // atribui via desestruturação
    const { local_partida, destino, lugares_total, veiculo } = req.body

    if (!local_partida || !destino || !lugares_total || !veiculo) {
        res.status(400).json(
            {
                id: 0,
                msg: "Erro... informe local de partida, destino, total de lugares e veículo"
            })
        return
    }

    try {
        await dbKnex("Excursao").where({ id })
            .update({ local_partida, destino, lugares_total, veiculo })

        res.status(200).json({ id, msg: "Ok! Alterado com sucesso" })
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

//=============================================================================================================================================

export const excursaoDelete = async (req, res) => {
    //  const id = req.params.id;
    const { id } = req.params;

    try {
        await dbKnex("Excursao").where({ id }).del()
        res.status(200).json({ id, msg: "Ok! Excursão excluída com sucesso" })
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

//=========================================================================================================================================
export const excursaoPesq = async (req, res) => {

    const { destino } = req.params

    try {
        // obtém da tabela de passageiro todos os registros de nome indicada
        const pesquisa = await dbKnex("Excursao").whereLike('destino', `%${destino}%`)
        res.status(200).json(pesquisa)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}
//======================================================================================================
export const excursaoTotal = async (req, res) => {
    try {
      // obtém da tabela de candidatas todos os registros
      const consulta = await dbKnex("excursao").count({total: "*"})
      res.status(200).json(consulta[0])
  } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}
