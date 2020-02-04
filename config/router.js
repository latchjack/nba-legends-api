const router = require('express').Router()
const players = require('../controllers/players')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/players')
  .get(players.index)
  .post(secureRoute, players.create)

router.route('/players/:id')
  .get(players.show)
  .put(secureRoute, players.update)
  .delete(secureRoute, players.retire)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)


module.exports = router