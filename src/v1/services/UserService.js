const user = require("../db/Users.js");

const findAll = () => {
    return user.findAll();
}
const findById = (id) => {
    return user.findById(id);
}
const create = (body) => {
    return user.create(body)
}
const update = (body) => {
    const userDb = findById(body.id);

    if(!userDb) {
        return null
    }

    return user.update(updateValues(userDb, body))
}

const updateValues = (userDb, body) => {
    if(body.name) {
        userDb.name = body.name;
    }
    if(body.email) {
        userDb.email = body.email;
    }
    if(body.phone) {
        userDb.phone = body.phone;
    }
    if(body.address) {
        userDb.address = body.address;
    }
    return userDb;
};

const deleteById = (id) => {
    const userDb = findById(id);

    if(!userDb) {
        return false
    }

    user.deleteById(id)
    return true
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}