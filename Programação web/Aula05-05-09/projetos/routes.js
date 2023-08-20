import { Router, json } from 'express'
import { carroDelete, carroIntervalo, carroModelo, carroPesq, carroStore, carroUpdate, carroIndex } from './controllers/CarroController.js'
import { clienteIndex, clientePesqNome, clienteStore, clientePesqEmail, ClinteCorreto } from './controllers/ClienteController.js'
const router = Router()

// "converte" os dados recebidos para o formato json
router.use(json())

// define as rotas de cadastro de carros
router.get('/cliente', clienteIndex)
      .post('/cliente', clienteStore) 
      .post('/cliente/login', ClinteCorreto) 
      //.delete('/carros/:id', carroDelete) 
      .get('/cliente/pesq/nome/:nome', clientePesqNome) 
      .get('/cliente/pesq/email/:email', clientePesqEmail) 
      

// define as rotas de cadastro de carros
router.get('/carros', carroIndex)
      .post('/carros', carroStore) 
      .put('/carros/:id', carroUpdate) 
      .delete('/carros/:id', carroDelete) 
      .get('/carros/pesq/:marca', carroPesq) 
      .get('/carros/intervalo/:from-:to', carroIntervalo) 
      .get('/carros/modelo/:modelo', carroModelo)

export default router