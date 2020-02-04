const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Player = require('../models/player')
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return Player.create([
        {
          name: 'Michael Jordan',
          nickName: 'MJ',
          dob: '170263',
          shirtNumber: 23,
          position: 'Shooting Guard',
          team: 'Chicago Bulls',
          points: 32292,
          rings: 6,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/jordami01.jpg'
        }, {
          name: 'Ray Allen',
          nickName: 'Sugar Ray',
          dob: '200775',
          shirtNumber: 34,
          position: 'Shooting Guard',
          team: 'Boston Celtics',
          points: 24505,
          rings: 2,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/allenra02.jpg'
        }, {
          name: 'Charles Barkley',
          nickName: 'The Round Mound of Rebound',
          dob: '200263',
          shirtNumber: 34,
          position: 'Power Forward',
          team: 'Philadelphia 76ers',
          points: 23757,
          rings: 0,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/barklch01.jpg'
        }, {
          name: 'Larry Bird',
          nickName: 'Larry Legend',
          dob: '071256',
          shirtNumber: 33,
          position: 'Small Forward',
          team: 'Boston Celtics',
          points: 21791,
          rings: 3,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/birdla01.jpg'
        }, {
          name: 'Kareem Abdul-Jabbar',
          nickName: 'The Tower from Power',
          dob: '160447',
          shirtNumber: 33,
          position: 'Center',
          team: 'Los Angeles Lakers',
          points: 38387,
          rings: 6,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/abdulka01.jpg'
        }, {
          name: 'Wilt Chamberlain',
          nickName: 'Wilt the Stilt',
          dob: '210836',
          shirtNumber: 13,
          position: 'Center',
          team: 'Harlem Globetrotters',
          points: 31419,
          rings: 2,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/chambwi01.jpg'
        }, {
          name: 'Clyde Drexler',
          nickName: 'The Glide',
          dob: '220662',
          shirtNumber: 22,
          position: 'Shooting Guard',
          team: 'Portland Trailblazers',
          points: 22195,
          rings: 1,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/drexlcl01.jpg'
        }, {
          name: 'Julius Erving',
          nickName: 'Dr J',
          dob: '220250',
          shirtNumber: 32,
          position: 'Small Forward',
          team: 'Philadelphia 76ers',
          points: 30026,
          rings: 1,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/ervinju01.jpg'
        }, {
          name: 'Patrick Ewing',
          nickName: 'Hoya Destroya',
          dob: '050862',
          shirtNumber: 33,
          position: 'Center',
          team: 'New York Knicks',
          points: 24815,
          rings: 0,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/ewingpa01.jpg'
        }, {
          name: 'Earvin Johnson Jr',
          nickName: 'Magic',
          dob: '140859',
          shirtNumber: 32,
          position: 'Point Guard',
          team: 'Los Angeles Lakers',
          points: 17707,
          rings: 5,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/johnsma02.jpg'
        }, {
          name: 'Jason Kidd',
          nickName: 'Mr Triple Double',
          dob: '230373',
          shirtNumber: 5,
          position: 'Point Guard',
          team: 'Dallas Mavericks',
          points: 17529,
          rings: 1,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/kiddja01.jpg'
        }, {
          name: 'Karl Malone',
          nickName: 'The Mailman',
          dob: '240763',
          shirtNumber: 11,
          position: 'Power Forward',
          team: 'Utah Jazz',
          points: 36928,
          rings: 0,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/malonka01.jpg'
        }, {
          name: 'Pete Maravich',
          nickName: 'Pistol',
          dob: '220647',
          shirtNumber: 44,
          position: 'Shooting Guard',
          team: 'Atlanta Hawks',
          points: 15948,
          rings: 0,
          active: false,
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/maravpe01.jpg'
        }, {
          name: 'Bill Russell',
          nickName: 'The Secretary of Defense',
          dob: '120234',
          shirtNumber: 6,
          position: 'Center',
          team: 'Boston Celtics',
          points: 14522,
          rings: 11,
          active: false,
          image: ''
        }
      ])
    })
    .then(createdPlayers => console.log(`${createdPlayers.length} ⛹🏽‍♂️ players created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})