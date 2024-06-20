const userService = require("../services/UserService");

const findAll = (req, res) => {
    const users = userService.findAll();

    if(users.length === 0) return res.status(404).send({"error": "Users not found"});

    return res.send(users);
};

const findById = (req, res) => {
    const user = userService.findById(req.params._id);

    if(!user) return res.status(404).send({"error": "User not found"});

    return res.send(user);
};

const create = (req, res) => {
    const {body} = req;

    if(!body.name || !body.email || !body.phone || !body.address) {
        return res.status(400).send({"error": "Please enter a valid payload"});
    }

    const created = userService.create(body)
    return res.status(201).send(created);
};

const update = (req, res) => {
    const {body} = req;

    if(!body._id) {
        return res.status(400).send({"error": "_Id is required"});
    }

    const updated = userService.update(req.body);

    if(!updated) return res.status(404).send({"error": "User not found"});

    return res.send(updated);
};

const deleteById = (req, res) => {
    const deleted = userService.deleteById(req.params._id);

    if(!deleted) return res.status(404).send({"error": "User not found"});

    res.status(204).send()
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}