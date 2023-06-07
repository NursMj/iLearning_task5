import _ from 'lodash'
import {en, de, it} from './alphabets'
import User from '../interfaces/User'

function getRandomInt(min:number, max:number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function deleteCharacter(str: string, index: number) {
  return str.slice(0, index) + str.slice(index + 1)
}

function addCharacter(str: string, index: number, char: string) {
  return str.slice(0, index) + char + str.slice(index)
}

function swapCharacters(str: string, index: number) {
  const char1 = str[index]
  const char2 = str[index + 1]
  return str.slice(0, index) + char2 + char1 + str.slice(index + 2)
}

function applyErrorsToString(inputString: string, errorCount: number, region: string): string {
  const alphabets: string = region == 'USA' ? en : region == 'DE' ? de : it
  let outputString = inputString

  for (let i = 0; i < errorCount; i++) {
    const randomError = getRandomInt(0, 2)

    if (randomError === 0 && outputString.length > 2) {
      outputString = deleteCharacter(outputString, getRandomInt(0, outputString.length - 1))
    } else if (randomError === 1 && outputString.length < 80) {
      const randomChar = alphabets[getRandomInt(0, alphabets.length - 1)]
      outputString = addCharacter(outputString, getRandomInt(0, outputString.length), randomChar)
    } else if (randomError === 2 && outputString.length > 1) {
      outputString = swapCharacters(outputString, getRandomInt(0, outputString.length - 2))
    }
  }
  return outputString
}

function applyErrorsToOneUser(userData: User, errorNumber: number, region: string): User {
  let outputData: User = userData
  const keysToChange = ['fullName', 'address', 'phoneNumber']
  const probability = errorNumber % 1
  let errorCountRemaining = errorNumber
  while (errorCountRemaining >= 1) {
    const randomErrorCount = getRandomInt(0, errorCountRemaining)
    const randomIndex = getRandomInt(0, keysToChange.length - 1)
    const randomKey = keysToChange[randomIndex]
    const randomKeyValue = userData[randomKey as keyof User]
    const outputString = applyErrorsToString(randomKeyValue, randomErrorCount, region)
    outputData[randomKey as keyof User] = outputString
    errorCountRemaining = errorCountRemaining - randomErrorCount
  }

  if (Math.random() <= probability) {
    const randomIndex = getRandomInt(0, keysToChange.length - 1)
    const randomKey = keysToChange[randomIndex]
    const randomKeyValue = userData[randomKey as keyof User]
    const outputString = applyErrorsToString(randomKeyValue, 1, region)
    outputData[randomKey as keyof User] = outputString
  }

  return outputData
}

function applyErrorsToUsersData(usersData: User[], errorNumber: number, region: string): User[] {
  const erroredUsers: User[] = usersData.map(u => applyErrorsToOneUser(u, errorNumber, region))
  return erroredUsers
}

export default applyErrorsToUsersData