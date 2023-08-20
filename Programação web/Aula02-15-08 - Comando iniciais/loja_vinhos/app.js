import express from 'express' 
const app = express()
const port = 3000

import vinhos from "./vinhos.js"

app.get('/', (req, res) => { // ROTAS 01
  res.send('Hello World!')
})

app.get('/aula2', (req, res) => { // ROTAS 02
    res.send('<h1>Programação web: Aula 2<h1>');
  })

  app.use("/vinhos", vinhos); // referencia do arquivo vinhos

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})