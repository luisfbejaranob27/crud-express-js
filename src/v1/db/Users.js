const dbV1 = require("./UsersV1.json").users;

const findAll = () => {
    return dbV1;
};

const findById = (id) => {
    return dbV1.find(user => user.id === Number(id));
};

const create = (body) => {
    const newUser = {
        id: id(),
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        createdAt: new Date()
    };

    dbV1.push(newUser);
    return newUser;
};

const id = () => {
    const length = dbV1.length;
    return length > 0 ? length + 1 : 1;
};

const update = (body) => {
    dbV1.forEach((user) => {
        if(user.id === Number(body.id)) {
            body.updatedAt = new Date();
            return body;
        }
    });
    return body
};

const deleteById = (id) => {
    const userIndex = dbV1.findIndex((user) => user.id === Number(id));

    if(userIndex > -1) {
        dbV1.splice(userIndex, 1);
    }
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}