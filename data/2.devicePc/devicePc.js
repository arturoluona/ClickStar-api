const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5a995b'),
    model: faker.commerce.productName(),
    make: faker.commerce.productMaterial(),
    type: 'laptop',
    serial: faker.random.uuid(),
    ram: [
      {
        version: '1.1',
        capacity: '2GB',
        serial: faker.random.uuid()
      }
    ],
    hdd: [
      {
        serial: faker.random.uuid(),
        capacity: '250GB'
      }
    ],
    processor: {
      cache: '2.5GHz',
      make: faker.commerce.productMaterial(),
      model: faker.commerce.productName(),
      serial: faker.random.uuid()
    },
    loader: { serial: faker.random.uuid() },
    battery: { serial: faker.random.uuid() },
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5b995b'),
    model: faker.commerce.productName(),
    make: faker.commerce.productMaterial(),
    type: 'cpu',
    serial: faker.random.uuid(),
    ram: [
      {
        version: '1.1',
        capacity: '2GB',
        serial: faker.random.uuid()
      }
    ],
    hdd: [
      {
        serial: faker.random.uuid(),
        capacity: '250GB'
      }
    ],
    processor: {
      cache: '2.5GHz',
      make: faker.commerce.productMaterial(),
      model: faker.commerce.productName(),
      serial: faker.random.uuid()
    },
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97c5b995b'),
    model: faker.commerce.productName(),
    make: faker.commerce.productMaterial(),
    type: 'cpu',
    serial: faker.random.uuid(),
    ram: [
      {
        version: '1.1',
        capacity: '2GB',
        serial: faker.random.uuid()
      }
    ],
    hdd: [
      {
        serial: faker.random.uuid(),
        capacity: '250GB'
      }
    ],
    processor: {
      cache: '2.5GHz',
      make: faker.commerce.productMaterial(),
      model: faker.commerce.productName(),
      serial: faker.random.uuid()
    },
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
