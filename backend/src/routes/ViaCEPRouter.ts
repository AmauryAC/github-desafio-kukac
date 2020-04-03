import { Router } from 'express'

import ViaCEPController from '../controllers/ViaCEPController'

const router = Router()

router.post('/', ViaCEPController.getCEPsInfo)

export default router
