import { Router } from 'express'

import PalindromeController from '../controllers/PalindromeController'

const router = Router()

router.post('/', PalindromeController.getPalindromes)

export default router
