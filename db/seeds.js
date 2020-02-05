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
          nickName: 'Air Jordan',
          dob: '17-02-1963',
          shirtNumber: 23,
          position: 'Shooting Guard',
          team: 'Chicago Bulls',
          points: 32292,
          rings: 6,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/jordami01.jpg'
        }, {
          name: 'Ray Allen',
          nickName: 'Sugar Ray',
          dob: '20-07-1975',
          shirtNumber: 34,
          position: 'Shooting Guard',
          team: 'Boston Celtics',
          points: 24505,
          rings: 2,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/allenra02.jpg'
        }, {
          name: 'Charles Barkley',
          nickName: 'The Round Mound of Rebound',
          dob: '20-02-1963',
          shirtNumber: 34,
          position: 'Power Forward',
          team: 'Philadelphia 76ers',
          points: 23757,
          rings: 0,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/barklch01.jpg'
        }, {
          name: 'Larry Bird',
          nickName: 'Larry Legend',
          dob: '07-12-1956',
          shirtNumber: 33,
          position: 'Small Forward',
          team: 'Boston Celtics',
          points: 21791,
          rings: 3,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/birdla01.jpg'
        }, {
          name: 'Kareem Abdul-Jabbar',
          nickName: 'The Tower from Power',
          dob: '16-04-1947',
          shirtNumber: 33,
          position: 'Center',
          team: 'Los Angeles Lakers',
          points: 38387,
          rings: 6,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/abdulka01.jpg'
        }, {
          name: 'Wilt Chamberlain',
          nickName: 'Wilt the Stilt',
          dob: '21-08-1936',
          shirtNumber: 13,
          position: 'Center',
          team: 'Harlem Globetrotters',
          points: 31419,
          rings: 2,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/chambwi01.jpg'
        }, {
          name: 'Clyde Drexler',
          nickName: 'The Glide',
          dob: '22-06-1962',
          shirtNumber: 22,
          position: 'Shooting Guard',
          team: 'Portland Trailblazers',
          points: 22195,
          rings: 1,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/drexlcl01.jpg'
        }, {
          name: 'Julius Erving',
          nickName: 'Dr J',
          dob: '22-02-1950',
          shirtNumber: 32,
          position: 'Small Forward',
          team: 'Philadelphia 76ers',
          points: 30026,
          rings: 1,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/ervinju01.jpg'
        }, {
          name: 'Patrick Ewing',
          nickName: 'Hoya Destroya',
          dob: '05-08-1962',
          shirtNumber: 33,
          position: 'Center',
          team: 'New York Knicks',
          points: 24815,
          rings: 0,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/ewingpa01.jpg'
        }, {
          name: 'Earvin Johnson Jr',
          nickName: 'Magic',
          dob: '14-08-1959',
          shirtNumber: 32,
          position: 'Point Guard',
          team: 'Los Angeles Lakers',
          points: 17707,
          rings: 5,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/johnsma02.jpg'
        }, {
          name: 'Jason Kidd',
          nickName: 'Mr Triple Double',
          dob: '23-03-1973',
          shirtNumber: 5,
          position: 'Point Guard',
          team: 'Dallas Mavericks',
          points: 17529,
          rings: 1,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/kiddja01.jpg'
        }, {
          name: 'Karl Malone',
          nickName: 'The Mailman',
          dob: '24-07-1963',
          shirtNumber: 11,
          position: 'Power Forward',
          team: 'Utah Jazz',
          points: 36928,
          rings: 0,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/malonka01.jpg'
        }, {
          name: 'Pete Maravich',
          nickName: 'Pistol Pete',
          dob: '22-06-1947',
          shirtNumber: 44,
          position: 'Shooting Guard',
          team: 'Atlanta Hawks',
          points: 15948,
          rings: 0,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001262/images/players/maravpe01.jpg'
        }, {
          name: 'Bill Russell',
          nickName: 'The Secretary of Defense',
          dob: '12-02-1934',
          shirtNumber: 6,
          position: 'Center',
          team: 'Boston Celtics',
          points: 14522,
          rings: 11,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001311/images/players/russebi01.jpg'
        }, {
          name: 'Jerry West',
          nickName: 'The Logo',
          dob: '28-05-1938',
          shirtNumber: 44,
          position: 'Point Guard',
          team: 'Los Angeles Lakers',
          points: 25192,
          rings: 1,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001311/images/players/westje01.jpg'
        }, {
          name: 'Hakeem Olajuwon',
          nickName: 'The Dream',
          dob: '21-01-1963',
          shirtNumber: 34,
          position: 'Center',
          team: 'Houston Rockets',
          points: 26946,
          rings: 2,
          active: 'Retired',
          image: 'https://d2cwpp38twqe55.cloudfront.net/req/202001311/images/players/olajuha01.jpg'
        }
      ])
    })
    .then(createdPlayers => console.log(`${createdPlayers.length} ⛹🏽‍♂️ players created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})  