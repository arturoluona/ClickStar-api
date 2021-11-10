const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id:  new ObjectID('5fbf02499a7ee61718e86253'),
    model: 'M-578',
    make: 'LG',
    serial: faker.random.uuid(),
    inch: '42 Pulgadas',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  },
  {
    _id:  new ObjectID('5fbf02499a7ee61718e86652'),
    model: 'G78778',
    make: 'Samsung',
    serial: faker.random.uuid(),
    inch: '42 Pulgadas',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  }
]
