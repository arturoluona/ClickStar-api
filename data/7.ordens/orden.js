const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'wait',
    device: {
      _id:  new ObjectID('5fbd0bd963ffbe1c2c45342a'),
      label: {
        _id:  '5fbd0bd963ffbe1c2c45342a',
        loader: 'vmkeiorvm',
        model: '3 Antenas',
        make: 'D-Link',
        serial: '78asdfgh45678',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 32,
    typeDevice: { value: 'deviceRouter', name: 'Router/Modem'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e122c'),
        status: 'wait',
        date: faker.date.past()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'wait',
    device: {
      _id:  new ObjectID('5fbd0bd963ffbe1c2c45342a'),
      label: {
        _id:  '5fbd0bd963ffbe1c2c45342a',
        loader: '495vberu9',
        model: '3 Antenas',
        make: 'D-Link',
        serial: 'asdfgh45678',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceRouter', name: 'Router/Modem'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e122c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e123c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'process',
    device: {
      _id:  new ObjectID('5fbd0bd963ffbe1c2c45142b'),
      label: {
        _id: '5fbd0bd963ffbe1c2c45142b',
        loader: 'm495vberu9',
        model: '2 Antenas',
        make: 'Tp-Link',
        serial: '6asdfgh45678',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceRouter', name: 'Router/Modem'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e124c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e125c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'completed',
    device: {
      _id:  new ObjectID('5fbf0ed62965181c60172956'),
      label: {
        _id: '5fbf0ed62965181c60172956',
        name: faker.name.prefix(),
        model: faker.random.words(5),
        make: faker.company.companyName(5),
        serial: faker.random.uuid(),
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceOthers', name: 'Otros'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e126c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e127c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'delivered',
    device: {
      _id:  new ObjectID('5fbf0ed62965181c60172655'),
      label: {        
        _id: '5fbf0ed62965181c60172655',
        name: faker.name.prefix(),
        model: faker.random.words(5),
        make: faker.company.companyName(5),
        serial: faker.random.uuid(),
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceOthers', name: 'Otros'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e128c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e129c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'cancelado',
    device: {
      _id:  new ObjectID('5fbf02499a7ee61718e86253'),
      label: {
        _id: '5fbf02499a7ee61718e86253',
        model: 'M-578',
        make: 'LG',
        serial: faker.random.uuid(),
        inch: '42 Pulgadas',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceMonitor', name: 'Monitor'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e112c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e133c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'completed',
    device: {
      _id:  new ObjectID('5fbf02499a7ee61718e86652'),
      label: {
        _id: '5fbf02499a7ee61718e86652',
        model: 'G7877878',
        make: 'Samsung',
        serial: faker.random.uuid(),
        inch: '42 Pulgadas',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'deviceMonitor', name: 'Monitor'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e142c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e153c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'process',
    device: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043b81'),
      label: {
        _id: '5fbf0d49ac8acb22bc043b81',
        tinta: [
          'Azul', 'Amarillo', 'Rojo', 'negro'
        ],
        model: 'Epson l210',
        make: 'EPSON',
        serial: 'iolkyt45678',
        cabezal: 'wcwce',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'devicePrinter', name: 'Impresora'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e162c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e173c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'wait',
    device: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043a82'),
      label: {
        _id: '5fbf0d49ac8acb22bc043a82',
        tinta: [
          'Azul', 'Amarillo', 'Rojo', 'negro'
        ],
        model: 'Epson tx111',
        make: 'EPSON',
        serial: 'wert34567xcvb',
        cabezal: 'gvybuyb',
        description: faker.lorem.text(15),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'devicePrinter', name: 'Impresora'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e182c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e193c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer : new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'wait',
    device: {
      _id:  new ObjectID('5fbf0d49ac8acb22ec043a82'),
      label: {
        _id: '5fbf0d49ac8acb22ec043a82',
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
      }
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'devicePc', name: 'PC'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e322c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e97b5e223c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    customer: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    tecnico:  new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    status: 'wait',
    device: {
      _id:  new ObjectID('5fbf0d49ac8acb22bc043b52'),
      label: {
        _id: '5fbf0d49ac8acb22bc043b52',
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
    },
    description: faker.lorem.text(14),
    price: 22,
    typeDevice: { value: 'devicePc', name: 'PC'},
    idOrden: faker.random.number(999999).toString(),
    historic: [
      {
        _id: new ObjectID('5aa1c2c35ef7a4e87b5e122c'),
        status: 'wait',
        date: faker.date.past()
      },
      {
        _id: new ObjectID('5aa1c2c35ef7a4e77b5e123c'),
        status: 'process',
        date: faker.date.recent()
      }
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
