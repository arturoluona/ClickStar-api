const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    ram: [
      {
        version: 'DDR3',
        capacity: '1GB',
        serial: faker.random.alphaNumeric(9)
      },
      {
        version: 'DDR3',
        capacity: '1GB',
        serial: faker.random.alphaNumeric(9)
      }
    ],
    model: faker.random.words(5),
    make: faker.company.companyName(5),
    serial: faker.random.uuid(),
    hdd: [
      {
        model: 'IDE',
        capacity: '500GB',
        serial: faker.random.alphaNumeric(9)
      }
    ],
    processor: {
        cache: '2.5GHz',
        model: 'i5',
        make: 'Intel',
        serial: faker.random.alphaNumeric(9)
    },
    loader: faker.random.alphaNumeric(9),
    description: faker.lorem.text(15),
    battery: faker.random.alphaNumeric(9),
    type: 'laptop',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    ram: [
      {
        version: 'DDR3',
        capacity: '1GB',
        serial: faker.random.alphaNumeric(9)
      },
      {
        version: 'DDR3',
        capacity: '1GB',
        serial: faker.random.alphaNumeric(9)
      }
    ],
    model: faker.random.words(5),
    make: faker.company.companyName(5),
    serial: faker.random.uuid(),
    hdd: [
      {
        model: 'IDE',
        capacity: '500GB',
        serial: faker.random.alphaNumeric(9)
      }
    ],
    processor: {
        cache: '2.5GHz',
        model: 'i5',
        make: 'Intel',
        serial: faker.random.alphaNumeric(9)
    },
    loader: faker.random.alphaNumeric(9),
    description: faker.lorem.text(15),
    battery: faker.random.alphaNumeric(9),
    type: 'cpu',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
