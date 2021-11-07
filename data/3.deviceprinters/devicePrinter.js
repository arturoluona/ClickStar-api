const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id:  new ObjectID('5fbf0d49ac8acb22bc043b81'),
    tinta: [
      {
        display: 'Azul',
        value: 'Azul'
      },
      {
        display: 'Amarillo',
        value: 'Amarillo'
      },
      {
        display: 'Rojo',
        value: 'Rojo'
      },
      {
        display: 'negro',
        value: 'negro'
      }
    ],
    model: 'Epson l210',
    make: 'EPSON',
    serial: 'mnbvcdtyuiol',
    cabezal: 'wcwce',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5fbf0d49ac8acb22bc043a82'),
    tinta: [
      {
        display: 'Azul',
        value: 'Azul'
      },
      {
        display: 'Amarillo',
        value: 'Amarillo'
      },
      {
        display: 'Rojo',
        value: 'Rojo'
      },
      {
        display: 'negro',
        value: 'negro'
      }
    ],
    model: 'Epson tx111',
    make: 'EPSON',
    serial: 'asdfghqwert34',
    cabezal: 'gvybuyb',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    deleted: false,
    updatedAt: faker.date.recent()
  }
]
