import { Router, json } from 'express'
import { candidataDelete, candidataIndex, candidataPesq, candidataStore, candidataUpdate } from './controllers/CandidataController.js'
import upload from './middlewares/FotoStore.js'

const router = Router()

router.use(json())

router.get('/candidatas', candidataIndex)
    .post('/candidatas', upload.single('foto'), candidataStore)
    .put('/candidatas/:id', candidataUpdate)
    .delete('/candidatas/:id', candidataDelete)
    .get('/candidatas/:idade', candidataPesq)

export default router