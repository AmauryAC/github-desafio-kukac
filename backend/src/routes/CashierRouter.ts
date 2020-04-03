import { Router } from 'express'

import CashierController from '../controllers/CashierController'

const router = Router()

router.post('/', CashierController.getCashChange)

export default router
