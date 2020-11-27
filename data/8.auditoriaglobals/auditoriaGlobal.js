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
    before: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043a82'),
      tinta: [
        'Azul', 'Amarillo', 'Rojo', 'negro'
      ],
      model: 'Epson tx111',
      make: 'EPSON',
      serial: 'asdfghqwert34567xcvb',
      cabezal: 'gvybuyb',
      description: faker.lorem.text(15),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    route: '/deviceMonitor',
    after: 'delete',
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
    before: 'all',
    route: '/deviceMonitor',
    after: 'all',
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
    before: 'get',
    route: '/devicePc/5fbf0d49ac8acb22bc043a82',
    after: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043a82'),
      tinta: [
        'Azul', 'Amarillo', 'Rojo', 'negro'
      ],
      model: 'HP tx111',
      make: 'HP',
      serial: 'asdfghqwert34567xcvb',
      cabezal: 'gvybuyb',
      description: faker.lorem.text(15),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
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
    before: 'new',
    route: '/orden',
    after: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043a82'),
      tinta: [
        'Azul', 'Amarillo', 'Rojo', 'negro'
      ],
      model: 'HP tx111',
      make: 'HP',
      serial: 'asdfghqwert34567xcvb',
      cabezal: 'gvybuyb',
      description: faker.lorem.text(15),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    },
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
