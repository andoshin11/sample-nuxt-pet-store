import { Router } from 'express'
import * as Pet from '../../controllers/pet'

const router = Router()

router.get('/', Pet.Index)
router.post('/', Pet.Create)
router.get('/:petId', Pet.Show)

export default router
