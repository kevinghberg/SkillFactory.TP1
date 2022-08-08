const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


let getUsers = () => {
    return fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
}

let getUser = (id) => {
    return fetch('https://fakestoreapi.com/users/' + id)
        .then(res => res.json());
}

let getUsersWithLimit = (limit) => {
    return fetch('https://fakestoreapi.com/users?limit=' + limit)
        .then(res => res.json())
}

const modelUsuario = {
    getUsers,
    getUser,
    getUsersWithLimit,
}

module.exports = modelUsuario;