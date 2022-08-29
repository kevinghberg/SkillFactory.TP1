const modelUsuario = require('../models/modelUsuario');

const getUsers = async (req, res) => {
    let users = [];
    if (req.query.limit) {
        users = await modelUsuario.getUsersWithLimit(req.query.limit);
        users.sort((a, b) => b.id - a.id);
    } else {
        users = await modelUsuario.getUsers();
    }
    res.status(200).send(users);
}

const getUser = async (req, res) => {
    let user = await modelUsuario.getUser(req.params.id);
    res.status(200).send(user);
}

const getFirstsUsers = async (req, res) => {
    let users = await modelUsuario.getUsersWithLimit(3);
    console.log(users);
    res.status(200).send(users);
}



const controllerUsuario = {
    getUsers,
    getUser,
    getFirstsUsers
}

module.exports = controllerUsuario;
