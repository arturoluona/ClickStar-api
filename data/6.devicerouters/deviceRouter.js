const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id:  new ObjectID('5fbd0bd963ffbe1c2c45342a'),
    loader: 'vmkeiorvm495',
    model: '3 Antenas',
    make: 'D-Link',
    serial: 'qwertyuiop345678asdfgh45678',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id:  new ObjectID('5fbd0bd963ffbe1c2c45142b'),
    loader: 'vmkeiorvm49',
    model: '2 Antenas',
    make: 'Tp-Link',
    serial: '78asdfgh45678',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
