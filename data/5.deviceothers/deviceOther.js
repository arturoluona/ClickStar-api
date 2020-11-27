const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id:  new ObjectID('5fbf0ed62965181c60172956'),
    name: faker.name.prefix(),
    model: faker.random.words(5),
    make: faker.company.companyName(5),
    serial: faker.random.uuid(),
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id:  new ObjectID('5fbf0ed62965181c60172655'),
    name: faker.name.prefix(),
    model: faker.random.words(5),
    make: faker.company.companyName(5),
    serial: faker.random.uuid(),
    inch: '42 Pulgadas',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
