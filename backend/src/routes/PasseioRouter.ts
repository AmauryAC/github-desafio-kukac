import { Router } from 'express'

import PasseioController from '../controllers/PasseioController'

const router = Router()

router.post('/', PasseioController.SalvarDadosVeiculoPasseio)

export default router
