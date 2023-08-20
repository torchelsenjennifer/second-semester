// const carros = [
//   { modelo: "Corsa", marca: "Chevrolet", ano: 2015, preco: 21900 },
//   { modelo: "Sandero", marca: "Renault", ano: 2017, preco: 31500 },
//   { modelo: "Palio", marca: "Fiat", ano: 2014, preco: 19800 }
// ] não vai ser mais ele 


import knex from "../data/db_config.js"
//async = assincrona


export const carroIndex = async (req, res) => { //para listagem
  const carros = await knex.select("*").from("carros")
  res.json(carros)
}

export const carroStore = async (req, res) => { //rota para verificação de objetos e inclusão de um carro novo
  // atribui via desestruturação
  const { modelo, marca, ano, preco } = req.body


  if (!modelo || !marca || !ano || !preco) { //! == not
    res.json(
      {
        id: 0,
        msg: "Erro... informe modelo, marca, ano e preco do veículo"
      })
    return
  }

  // carros.push({ modelo, marca, ano, preco })
  const carros = await knex('carros').insert({ modelo, marca, ano, preco }) //adiciona no banco
  //await = pausar, esperar
  res.json({ id: carros[0], msg: "Ok! Inserido com sucesso" })
}

export const carroUpdate = async (req, res) => { //rota para realizar a alteração
  //  const id = req.params.id;
  const { id } = req.params;

  // atribui via desestruturação
  const { modelo, marca, ano, preco } = req.body

  if (!modelo || !marca || !ano || !preco) { //teste com mesagem
    res.json(
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

  await knex("carros").update({ modelo, marca, ano, preco }).where({ id })

  res.json({ id, msg: "Ok! Alterado com sucesso" })
}

export const carroDelete = (req, res) => { //rota para realizar a exclusão de um objeto
  //  const id = req.params.id;
  const { id } = req.params;

  if (id > carros.length) {
    res.json({ id: 0, msg: "Erro... código inválido" })
    return
  }
 //const await knex ('carros').where('carros',false).del() verificação
  carros.splice(id - 1, 1)
  res.json({ id, msg: "Ok! Excluído com sucesso" })
}

export const carroPesq = (req, res) => { // rota para pesquisar algum da lista

  const { marca } = req.params

  const lista = []

  for (const carro of carro) {
    if (carro.marca.toUpperCase() == marca.toUpperCase()) {
      lista.push(carro)
    }
  }

  if (lista.length == 0) {
    res.json({ id: 0, msg: "Não há carros desta marca" })
    return
  }

  res.json(lista)
}

export const carroIntervalo = (req, res) => {

  const { from, to } = req.params

  const lista = []

  for (const carro of carros) {
    if (carro.ano >= from && carro.ano <= to) {
      lista.push(carro)
    }
  }

  if (lista.length == 0) {
    res.json({ id: 0, msg: "Não há carros neste intervalo de anos" })
    return
  }

  res.json(lista)
}
