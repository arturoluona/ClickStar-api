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
    route: '/deviceMonitor',
    method: 'eliminar',
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
    method: 'obtener todo',
    route: '/deviceMonitor',
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
    method: 'obtener',
    route: '/devicePc/5fbf0d49ac8acb22bc043a82',
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
    method: 'nuevo',
    route: '/orden',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
