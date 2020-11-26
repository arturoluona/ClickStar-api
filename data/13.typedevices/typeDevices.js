const faker = require('faker')
const ObjectID = require('mongodb').ObjectID
const nom = ['laptop', 'cpu', 'impresora', 'modem/router', 'monitor', 'otros']


module.exports = [
  {
    price: nom[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: nom[1],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: nom[2],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: nom[3],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: nom[4],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    name: nom[5],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
