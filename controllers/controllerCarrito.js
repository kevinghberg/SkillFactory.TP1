const modelCarrito = require('../models/modelCarrito.js');
const modelUsuario = require('../models/modelUsuario');

const getAllCarts = async (req, res) => {
    let carts = await modelCarrito.getAllCarts();
    res.status(200).send(carts);
}

const getCartByID = async (req, res) => {
    let carts = await modelCarrito.getCartByID(req.params.id);
    res.status(200).send(carts);
}

const getBigCarts = async (req, res) => {
    let carts = await modelCarrito.getAllCarts();
    let users = await modelUsuario.getUsers();

    carts = carts.filter(sumQuantity);
    let aux = [];

    carts.forEach(element => {
        users.forEach(element2 => {
            if (element.userId == element2.id) {
                aux.push({ ...element, ...element2 });
            }
        });
    });

    aux = aux.map(values => {
        return {
            id: values.id,
            name: values.name
        }
    })
    res.status(200).send(aux);
}


function sumQuantity(cart) {
    let aux = 0;
    cart.products.forEach(element => {
        aux += element.quantity;
    })
    return aux > 2;
}


const controllerCarrito = {
    getAllCarts,
    getCartByID,
    getBigCarts
}


module.exports = controllerCarrito;