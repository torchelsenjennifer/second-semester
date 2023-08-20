import express from 'express'
const app = express()
const port = 3001

import routes from './routes.js'

app.use(routes)

app.get('/', (req, res) => {
  res.send('Controle de imoveis')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})