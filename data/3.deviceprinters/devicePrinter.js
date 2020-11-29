const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  { 
    _id:  new ObjectID('5fbf0d49ac8acb22bc043b81'),
    tinta: [
      'Azul', 'Amarillo', 'Rojo', 'negro'
    ],
    model: 'Epson l210',
    make: 'EPSON',
    serial: 'mnbvcdtyuiolkyt45678',
    cabezal: 'wcwce',
    description: faker.lorem.text(15),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
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
  }
]
