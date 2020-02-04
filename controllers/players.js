const Player = require('../models/player')

function index(req, res) {
  Player
    .find()
    .then(foundPlayers => res.status(200).json(foundPlayers))
    .catch(err => res.json(err))
}

function create(req, res) {
  Player
    .create(req.body)
    .then(createdPlayer => res.status(201).json(createdPlayer))
    .catch(err => res.json(err))
}

function show(req, res) {
  Player
    .findById(req.params.id)
    .then(player => res.status(202).json(player))
    .catch(err => res.json(err))
}

function update(req, res) {
  Player
    .findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: 'Not Found' })
      Object.assign(player, req.body)
      return player.save()
    })
    .then(updatedPlayer => res.status(202).json(updatedPlayer))
    .catch(err => res.json(err))
}

function retire(req, res) {
  Player
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(204))
    .catch(err => res.json(err))
}


module.exports = { index, create, show, update, retire }