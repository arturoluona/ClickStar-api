const faker = require('faker')
const ObjectID = require('mongodb').ObjectID
const types = ['laptop', 'cpu', 'impresora', 'modem/router', 'monitor', 'otros']


module.exports = [
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[0],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[1],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[2],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[3],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[4],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    description: faker.lorem.text(5),
    type: types[5],
    price: 22,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
