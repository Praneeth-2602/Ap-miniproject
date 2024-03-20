import { storeScore, displayPokeScore, displayTriviaScore } from '../controllers/commands.js'
import { Router } from 'express'

const router = Router()

router.route('/storescore').post(storeScore)
router.route('/displayPokeScore').get(displayPokeScore)
router.route('/displayTriviaScore').get(displayTriviaScore)

const _default = router
export { _default as default }