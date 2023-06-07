import _ from 'lodash'
import {en, de, it} from './alphabets.js'

const data = [
    {_id: '1', fullName: 'Nursultan Mj', address: 'Kokjar Kydykeeva 20/2', phoneNumber: '+996701818850',
    },
    {_id: '1', fullName: 'Nursultan Mj', address: 'Kokjar Kydykeeva 20/2', phoneNumber: '+996701818850',
    },
    {_id: '1', fullName: 'Nursultan Mj', address: 'Kokjar Kydykeeva 20/2', phoneNumber: '+996701818850',
    },
]

function getRandomInt(min, max)  {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function deleteCharacter(str, index) {
  return str.slice(0, index) + str.slice(index + 1)
}

function addCharacter(str, index, char) {
  return str.slice(0, index) + char + str.slice(index)
}

function swapCharacters(str, index) {
  const char1 = str[index]
  const char2 = str[index + 1]
  return str.slice(0, index) + char2 + char1 + str.slice(index + 2)
}

function applyErrorsToString(inputString, errorCount, region) {
  const alphabets = region == 'USA' ? en : region == 'DE' ? de : it
  let outputString = inputString

  for (let i = 0; i < errorCount; i++) {
    const randomError = getRandomInt(0, 2)

    if (randomError === 0 && outputString.length > 0) {
      outputString = deleteCharacter(outputString, getRandomInt(0, outputString.length - 1))
    } else if (randomError === 1) {
      const randomChar = alphabets[getRandomInt(0, alphabets.length - 1)]
      outputString = addCharacter(outputString, getRandomInt(0, outputString.length), randomChar)
    } else if (randomError === 2 && outputString.length > 1) {
      outputString = swapCharacters(outputString, getRandomInt(0, outputString.length - 2))
    }
  }
  return outputString
}

function applyErrorsToOneUser(userData, errorNumber, region) {
  let outputData = userData
  const keysToChange = ['fullName', 'address', 'phoneNumber']
  const probability = errorNumber % 1
  let errorCountRemaining = errorNumber
  while (errorCountRemaining >= 1) {
    const randomErrorCount = getRandomInt(0, errorCountRemaining)
    const randomIndex = getRandomInt(0, keysToChange.length - 1)
    const randomKey = keysToChange[randomIndex]
    const randomKeyValue = outputData[randomKey]
    const outputString = applyErrorsToString(randomKeyValue, randomErrorCount, region)
    outputData[randomKey] = outputString
    errorCountRemaining = errorCountRemaining - randomErrorCount
  }

  if (Math.random() <= probability) {
    const randomIndex = getRandomInt(0, keysToChange.length)
    const randomKey = keysToChange[randomIndex]
    const randomKeyValue = userData[randomKey]
    const outputString = applyErrorsToString(randomKeyValue, 1, region)
    outputData[randomKey] = outputString
  }

  return outputData
}

function applyErrorsToUsersData(usersData, errorNumber, region) {
  const erroredUsers = usersData.map(u => applyErrorsToOneUser(u, errorNumber, region))
  return erroredUsers
}

// console.log(applyErrorsToUsersData(data, 1000, 'en'))
// console.log(data[_random(0, data.length)])

export default applyErrorsToUsersData