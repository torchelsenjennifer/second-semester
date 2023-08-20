import { Router, json } from 'express'
import cors from 'cors'

import { passageiroIndex, passageiroStore, passageiroUpdate, passageiroDelete, passageiroPesq, passageiroTotal } from './controllers/PassageiroController.js'
import { excursaoIndex, excursaoStore, excursaoUpdate, excursaoDelete, excursaoPesq, excursaoTotal } from './controllers/ExcursãoController.js'
import { arquivoPdf, reservaConfirma, reservaDelete, reservaIndex, reservaPesq, reservaStore, totalReserva, totalGrafico } from './controllers/ReservaController.js'
import upload from './middlewares/FotoStore.js'
import { adminIndex, adminStore } from './controllers/AdminstradorController.js'
import { loginAdmin } from './controllers/LoginController.js'
import { verificaLogin } from './middlewares/VerificaLogin.js'


const router = Router()

router.use(json())

// libera acesso ao Web Service, a partir de origens diferentes
router.use(cors())

// define as rotas do cadastro de passageiro
router.get('/passageiro', passageiroIndex)
      .post('/passageiro', passageiroStore)
      .get('/passageiro/total', passageiroTotal)
      .put('/passageiro/:id', passageiroUpdate)
      .delete('/passageiro/:id', passageiroDelete)
      .get('/passageiro/:nome', passageiroPesq)

// define as rotas do cadastro das excursões
router.get('/excursao', excursaoIndex)
      .get('/excursao/total', excursaoTotal)
      .post('/excursao', [upload.single('foto')], excursaoStore)
      .put('/excursao/:id', excursaoUpdate)
      .delete('/excursao/:id', excursaoDelete)
      .get('/excursao/:destino', excursaoPesq)


// define as rotas da reserva
router.get('/reserva', reservaIndex)
      .get('/reserva/total', totalReserva)
      .get('/reserva/totalGrafico', totalGrafico)
      .post('/reserva', reservaStore)
      .get('/reserva/:id', reservaPesq)
      .get('/reserva/confirma/:id', reservaConfirma)
      .delete('/reserva/:id', reservaDelete)


// define o admin
router.get('/administrador', adminIndex)
      .post('/administrador', adminStore)

// define o login do admin
router.post('/login', loginAdmin)

// define rota de pdf
router.get('/arquivo/pdf/:id', arquivoPdf)

export default router