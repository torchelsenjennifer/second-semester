import dbKnex from '../dados/db_config.js'
import md5 from 'md5'
import nodemailer from "nodemailer"

export const votoIndex = async (req, res) => {
  try {
    // obtém da tabela de votos todos os registros
    const votos = await dbKnex.select("v.*", "c.nome as candidata")
      .from("votos as v")
      .innerJoin("candidatas as c", { "v.candidata_id": "c.id" })
    res.status(200).json(votos)
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}


//============================================================================================

// async..await is not allowed in global scope, must use a wrapper
async function send_email() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  //daods de configuração da conta de onde partirá os em-mails
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
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



//=========================================================================================================================
export const votoStore = async (req, res) => {

  // atribui via desestruturação
  const { nome, email, candidata_id } = req.body

  // se não informou estes atributos
  if (!nome || !email || !candidata_id) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, email e candidata_id do voto" })
    return
  }

  try {
    // obtém da tabela de candidatas todos os registros da marca indicada
    const verifica = await dbKnex("votos").where({ email })

    // se a consulta retornou algum registro (significa que já votou)
    if (verifica.length > 0) {
      res.status(400).json({ id: 0, msg: "Erro... este e-mail já votou" })
      return
    }
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    return
  }


  try {
    // 1ª operação da transação
    const novo = await dbKnex('votos').insert({ nome, email, candidata_id })


    // novo[0] => retorna o id do registro inserido                     
    res.status(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })
  } catch (error) {

    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}

//=====================================================================================================
export const votoConfirme = async (req, res) => {

  // atribui via desestruturação
  const { nome, email, candidata_id } = req.body

  // se não informou estes atributos
  if (!nome || !email || !candidata_id) {
    res.status(400).json({ id: 0, msg: "Erro... informe nome, email e candidata_id do voto" })
    return
  }

  try {
    // obtém da tabela de candidatas todos os registros da marca indicada
    const verifica = await dbKnex("votos").where({ email })


    // se a consulta retornou algum registro (significa que já votou)
    if (verifica.length > 0) {
      res.status(400).json({ id: 0, msg: "Erro... este e-mail já votou" })
      return
    }
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    return
  }

  //gera um "hash"(codigo) que sera utilizado no email para o cliente confirmar seu voto
  const hash = md5(email + candidata_id + Date.now())

  try {
    //Insere um registro na tabela de votos
    const novo = await dbKnex('votos').insert({ nome, email, candidata_id, hash_conf: hash })
    //envia e-mail para o cliente confirmando o seu voto
    send_email().catch(console.error);
    // novo[0] => retorna o id do registro inserido                     
    res.status(201).json({ id: novo[0], msg: "Ok! Inserido com sucesso" })
  } catch (error) {
    res.status(400).json({ id: 0, msg: "Erro: " + error.message })
  }
}





