function checkParameters(parameters, body) {
  const keys = Object.keys(body)
  const keysNotFound = []
  for (const element of parameters) {
    if (!keys.includes(element)) {
      keysNotFound.push(element)
    }
  }
  return keysNotFound
}

function printParameters(parameters) {
  let result = ''
  for (let i = 0; i < parameters.length; i++) {
    if (i === parameters.length - 1) {
      result += `${parameters[i]}`
    } else if (i === parameters.length - 2) {
      result += `${parameters[i]} and `
    } else if (parameters.length === 2) {
      result += `${parameters[i]} and `
    } else {
      result += `${parameters[i]}, `
    }
  }
  return result
}

function updateUserValues(userDb, body) {
  if (body.name) {
    userDb.name = body.name
  }
  if (body.email) {
    userDb.email = body.email
  }
  if (body.phone) {
    userDb.phone = body.phone
  }
  if (body.address) {
    userDb.address = body.address
  }
  return userDb
}

module.exports = {
  checkParameters,
  printParameters,
  updateUserValues
}
