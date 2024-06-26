function updateUserValues(userDb, body) {
  if (body.name) {
    userDb.name = body.name;
  }
  if (body.email) {
    userDb.email = body.email;
  }
  if (body.phone) {
    userDb.phone = body.phone;
  }
  if (body.address) {
    userDb.address = body.address;
  }
  return userDb;
}

module.exports = {
  updateUserValues
};
