const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    name: faker.commerce.productName(),
    stock: 20,
    description: faker.lorem.text(5),
    proveedor: faker.company.companyName(2),
    price: 22,
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    stock: 7,
    description: faker.lorem.text(5),
    proveedor: faker.company.companyName(2),
    price: 12,
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    stock: 50,
    description: faker.lorem.text(5),
    proveedor: faker.company.companyName(2),
    price: 202,
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  },
  {
    name: faker.commerce.productName(),
    stock: 10,
    description: faker.lorem.text(5),
    proveedor: faker.company.companyName(2),
    price: 20,
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  }
]
