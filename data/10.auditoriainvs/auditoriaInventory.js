const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    user: {
      _id: new ObjectID('5aa1c2c35ef7a4e97b5e995d'),
      name: 'Office user',
      ci: '44444444',
      email: 'office@office.com',
      role: 'office',
      verified: true,
      city: 'Bucaramanga',
      country: faker.address.streetAddress(true),
      phone: '123123',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    inventory: {
      name: faker.commerce.productName(),
      stock: 50,
      description: faker.lorem.text(5),
      proveedor: faker.company.companyName(2),
      price: 202,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    qty: 2,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    user: {
      _id: new ObjectID('5aa1c2c35ef7a4e97b5e995d'),
      name: 'Office user',
      ci: '44444444',
      email: 'office@office.com',
      role: 'office',
      verified: true,
      city: 'Bucaramanga',
      country: faker.address.streetAddress(true),
      phone: '123123',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    inventory: {
      name: faker.commerce.productName(),
      stock: 50,
      description: faker.lorem.text(5),
      proveedor: faker.company.companyName(2),
      price: 202,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    qty: 2,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    user: {
      _id: new ObjectID('5aa1c2c35ef7a4e97b5e995d'),
      name: 'Office user',
      ci: '44444444',
      email: 'office@office.com',
      role: 'office',
      verified: true,
      city: 'Bucaramanga',
      country: faker.address.streetAddress(true),
      phone: '123123',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    inventory: {
      name: faker.commerce.productName(),
      stock: 50,
      description: faker.lorem.text(5),
      proveedor: faker.company.companyName(2),
      price: 202,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    qty: 2,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
