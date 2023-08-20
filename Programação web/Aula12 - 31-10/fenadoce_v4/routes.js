import { Router, json } from 'express'
import cors from 'cors'

import { candidataDadosGerais, candidataDelete, candidataIndex, candidataPesq, candidataPorCidade, candidataStore, candidataTotalVotos, candidataUpdate, candidataVotos } from './controllers/CandidataController.js'
import { votoIndex, votoStore, votoConfirme, votoTotais2 } from './controllers/VotoController.js'
import { adminIndex, adminStore } from './controllers/AdminController.js'
import { loginAdmin } from './controllers/LoginController.js'

import upload from './middlewares/FotoStore.js'
import { verificaLogin } from './middlewares/VerificaLogin.js'

const router = Router()

router.use(json())

// libera acesso ao Web Service, a partir de origens diferentes
router.use(cors())

// define as rotas de cadastro das candidatas
router.get('/candidatas', candidataIndex)
      .post('/candidatas', upload.single('foto'), candidataStore)
      .put('/candidatas/:id', candidataUpdate)
      .delete('/candidatas/:id', verificaLogin, candidataDelete)
      .get('/candidatas/pesq/:idade', candidataPesq)
      .get('/candidatas/gerais', candidataDadosGerais)
      .get('/candidatas/cidade', candidataPorCidade)
      .get('/candidatas/total_votos', candidataTotalVotos)
      .get('/candidatas/votos', candidataVotos)

// define as rotas de cadastro dos votos
router.get('/votos', votoIndex)
      .post('/votos', votoStore)
      .get('/votos/confirma/:hash', votoConfirme)
      .get('/votos/totais',votoTotais2)

// define as rotas de cadastro dos admins
router.get('/admins', adminIndex)
      .post('/admins', adminStore)

// define a rota de login
router.get('/login', loginAdmin)

export default router