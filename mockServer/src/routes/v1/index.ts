import { Router } from 'express'
import pet from './pet'

const router = Router()

router.use('/pets', pet)

export default router
