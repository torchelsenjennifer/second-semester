import { Router, json } from 'express'
import { reservaIndex, reservaStore } from './controllers/reservaController.js'

const router = Router()

router.use(json())

// define as rotas de cadastro de reservas
router.get('/reservas', reservaIndex)
      .post('/reservas', reservaStore)

export default router
