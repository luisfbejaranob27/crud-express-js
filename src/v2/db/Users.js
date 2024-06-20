const dbV2 = require("./UsersV2.json").users;
const {v4: uuid} = require("uuid");


const findAll = () => {
    return dbV2;
};

const findById = (id) => {
    return dbV2.find(user => user._id === id);
};

const create = (body) => {
    const newUser = {
        id: uuid(),
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        createdAt: new Date()
    };

    dbV2.push(newUser);
    return newUser;
};

const update = (body) => {
    dbV2.forEach((user) => {
        if(user._id === body._id) {
            body.updatedAt = new Date();
            return body;
        }
    });
    return body
};

const deleteById = (_id) => {
    const userIndex = dbV2.findIndex((user) => user._id === _id);

    if(userIndex > -1) {
        dbV2.splice(userIndex, 1);
    }
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}