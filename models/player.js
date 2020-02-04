const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  nickName: { type: String, required: true, unique: true },
  dob: { type: String, required: true, unique: false },
  shirtNumber: { type: Number, required: true, unique: false },
  position: { type: String, required: true, unique: false },
  team: { type: String, required: true, unique: false },
  points: { type: Number, required: true, unique: false },
  rings: { type: Number, required: true, unique: false },
  active: { type: Boolean, required: true, unique: false },
  image: { type: String, required: true, unique: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Player', playerSchema)