const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    name: 'Super Administrator',
    email: 'admin@admin.com',
    ci: '27345987',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'admin',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    city: 'Bucaramanga',
    country: faker.address.streetAddress(true),
    phone: '123123',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    name: 'Daniel Pineda',
    ci: '30987456',
    email: 'Sobrino.danielito@gmail.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'user',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    city: 'Bucaramanga',
    country: faker.address.streetAddress(true),
    phone: '04248764584',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e998b'),
    name: 'Alejandro Guerrero',
    ci: '126453098',
    email: 'josealejandro@gmail.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'user',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    city: 'Tariba City',
    country: faker.address.streetAddress(true),
    phone: '123123',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    name: 'Jose Miguel',
    ci: '2645987',
    email: 'tecnico@tecnico.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'tecnico',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    city: 'Rubio',
    country: faker.address.streetAddress(true),
    phone: '0246987123',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995d'),
    name: 'Jose Alejandro',
    ci: '27556690',
    email: 'office@office.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'office',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    city: 'cerca de palmira',
    country: faker.address.streetAddress(true),
    phone: '123123',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
