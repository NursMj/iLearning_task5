import { fakerEN_US, fakerDE, fakerIT } from '@faker-js/faker'
import User from '../interfaces/User'

function createRandomUser(seed: number, region: string): User {
  const faker = region == 'USA' ? fakerEN_US : region == 'DE' ? fakerDE : fakerIT
  const l = faker.location
  faker.seed(seed)
  return {
    _id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    address: `${l.state()} ${l.city()}  ${l.streetAddress()}`,
    phoneNumber: faker.phone.number(),
  }
}

export default createRandomUser