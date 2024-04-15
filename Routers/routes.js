import { storeScore, displayPokeScore, displayTriviaScore, createUser, verifyLogin } from '../Controllers/commands.js'
import { Router } from 'express'

const router = Router()

router.route('/storescore').post(storeScore)
router.route('/displayPokeScore').get(displayPokeScore)
router.route('/displayTriviaScore').get(displayTriviaScore)
router.route('/createuser').post(createUser)
router.route('/verifylogin').post(verifyLogin)

const _default = router
export { _default as default }