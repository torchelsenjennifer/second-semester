import dbKnex from '../dados/db_config.js'
import nodemailer from 'nodemailer'
import ejs from 'ejs'
import puppeteer from 'puppeteer'
import md5 from 'md5'


export const reservaIndex = async (req, res) => {
    try {
        // obtém da tabela de reserva todos os registros
        const reservas = await dbKnex("reserva")
            .select("p.nome",
                "p.telefone",
                "e.destino",
                "reserva.poltrona",
                "e.data_partida",
                "e.data_chegada"
            )
            .join("excursao as e", "reserva.id_excursao", "e.destino")
            .innerJoin("passageiro as p", "reserva.id_passageiro", "p.id")
            .innerJoin("excursao as e", "reserva.id_excursao", "e.id")
        res.status(200).json(reservas)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}
//=====================================================================================================
export const reservaPesq = async (req, res) => {
    const { id } = req.params
    try {
        // obtém da tabela de reserva todos os registros

        const reservas = await dbKnex("reserva")
            .select("p.nome",
                "p.telefone",
                "e.destino",
                "reserva.id",
                "reserva.poltrona",
                "e.data_partida",
                "e.data_chegada"
            )
            .innerJoin("passageiro as p", "reserva.id_passageiro", "p.id")
            .innerJoin("excursao as e", "reserva.id_excursao", "e.id")
            .where('reserva.id', id)

        ejs.renderFile('views/listaDestino.ejs', { reservas }, (err, html) => {
            if (err) {
                console.log(err);
                return res.send("Erro... não foi possivel gerar a listagem")
            }
            res.status(200).send(html)
        });
        // res.status(200).json(reservas)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}


//// EMAIL =======================================================================================================
// async..await is not allowed in global scope, must use a wrapper
async function send_email( email, assunto, mensa) {

    // dados de configuração da conta de onde partirá os e-mails
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "bd0c95a92862ec",
            pass: "01a7473cb832c7"
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Agencia de viagens" <BeiraMarAgencia@gmail.com>', // sender address
        to: email, // list of receivers
        subject: assunto, // Subject line
        text: ``,
        html: mensa, // html body
    });
}
// ====================================================================================================================

export const reservaStore = async (req, res) => {

    // atribui via desestruturação
    const { id_passageiro, id_excursao, poltrona } = req.body

    // se não informou estes atributos
    if (!id_passageiro || !id_excursao || !poltrona) {
        res.status(400).json({ id: 0, msg: "Erro... informe os campos" })
        return
    }
    //inicia (define) uma nova transação
    const trx = await dbKnex.transaction()

    try {

        const existePass = await trx("Passageiro").where({ id: id_passageiro })
        //console.log(existePass)
        //console.log(existePass.length)
        // 
        if (existePass.length == 0) {
            const error = { message: "Erro... passageiro não encontrado." };
            throw error;
        }
        const existeExcu = await trx("Excursao").where({ id: id_excursao })
        if (existeExcu.length == 0) {
            const error = { message: "Erro... excursão não encontrado." };
            throw error;
        }
        const existePol = await trx("Reserva").where({ id_excursao, poltrona })
        //console.log(existePol)
        if (existePol.length > 0) {
            const error = { message: "Erro... essa poltrona está ocupada." };
            throw error;
        }

        if (existePol.length > 0) {
            const error = { message: "Erro... essa poltrona está ocupada." };
            throw error;
        }
        const hash = md5(existePass[0].email + existePass[0].id + Date.now())

        //insere um novo registro na tabela de reserva
        const reserva = await trx('Reserva').insert({ id_passageiro, id_excursao, poltrona, hash })

        // if (poltrona > existeExcu[0].lugares_total) {
        //     const error = { message: "Erro... essa poltrona não existe." };
        //     throw error;
        // }
        //altera(incrementa) o campo lugares ocupados, na tabela de candidatas

        await trx.commit()

        const link = "http://localhost:3001/reserva/confirma/" + hash;
        const assunto = "Confirmação de Reserva";

        let mensa = `<p> Olá ${existePass[0].nome}, tudo bem?</p>`
        mensa += "<p>Por favor, confirme sua reserva clicando no link:</p>"
        mensa += `<a href=${link}>Confirmar Reserva</a>`;

        send_email( existePass[0].email, assunto, mensa)

        res.status(201).json({ id: reserva[0], msg: "Ok! Reserva inserida com sucesso" })

    } catch (error) {
        //desfaz as operações já realizadas
        await trx.rollback()
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

//==============================PDF====================================================================
export const arquivoPdf = async (req, res) => {
    const { id } = req.params
    //const browser = await puppeteer.launch({Headerss: false});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`http://localhost:3001/reserva/${id}`);

    await page.waitForNetworkIdle(0)

    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
        margin: {
            top: '20px',
            right: '20px',
            bottom: '20px',
            left: '20px'
        }
    })

    await browser.close();

    res.contentType('apllication/pdf')
    res.setHeader('Content-Disposition', 'inline;filename=reserva.pdf')
    res.status(200).send(pdf)
}

//==================================================================================
export const reservaConfirma = async (req, res) => {

    // obtém o parâmetro com o hash para confirmação do voto
    const { hash } = req.params
  
    // declara a variável que será utilizada dentro e fora do bloco
    let reservas
    try {
      // obtém da tabela de votos o voto com o hash informado
      reservas = await dbKnex("reserva").where({ hash: hash })
  
      // se a consulta retornou algum registro (significa que já votou)
      if (reservas.length == 0) {
        res.status(400).send("Código inválido. Por favor, copie e cole novamente")
        return  
      }
    } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
      return
    }
  
    // define (inicia) uma nova transação
    const trx = await dbKnex.transaction()
  
    try {
      // 1ª operação da transação: alterar o status da reservas
      // para confirmado
      const novo = await trx('reserva')
                   .where({ hash: hash }).update({ confirmado: 1})
  
      // 2ª operação da transação: aumentar o lugares ocupados
      // excursao
                  await trx("Excursao")
                 .where({ id: reservas[0].id_excursao }).increment({ lugares_ocupados: 1 })
  
      // commit (grava) a transação
      await trx.commit()

      const existePass = await dbKnex("Passageiro").where({ id: reservas[0].id_passageiro })
      const link = "http://localhost:3001/arquivo/pdf/" + reservas[0].id;
      const assunto = "Passagem";

      let mensa = `<p> Olá ${existePass[0].nome}, tudo bem?</p>`
      mensa += `<p>Você reservou uma viagem, seguem informações da passagem:</p>`
      mensa += `<a href=${link}>Gerar PDF</a>`;

      send_email( existePass[0].email, assunto, mensa)
  
      // mensagem de confirmação
      res.status(201).send("Obrigado! Reserva confirmado com sucesso.")
    } catch (error) {
      // rollback (volta) desfaz a operação realizada
      await trx.rollback()
  
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }
  //===========================================================================================================
export const totalReservaConfirmada = async (req, res) => {
    try {
      // obtém da tabela de candidatas todos os registros
      const consulta = await dbKnex("reserva").select("confirmado")
                      .count({num: "*"}).groupBy("confirmado")
      res.status(200).json(consulta)
  } catch (error) {
      res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
  }