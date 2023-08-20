import { Router, json } from 'express'
import { produtoIndex, produtoLista, produtoPdf } from './controllers/produtoController.js'

const router = Router()

router.use(json())

// define as rotas de cadastro das candidatas
router.get('/produtos', produtoIndex)
      .get('/produtos/lista', produtoLista)
      .get('/produtos/pdf', produtoPdf)

export default router
