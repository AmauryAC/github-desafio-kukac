import { Router } from 'express'

import MotoController from '../controllers/MotoControler'

const router = Router()

router.post('/', MotoController.SalvarDadosVeiculoMoto)

export default router
