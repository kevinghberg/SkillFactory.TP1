const modelCarrito = require('../models/modelCarrito.js');

const getAllCarts = async (req,res) => {
    let carts = await modelCarrito.getAllCarts();
    res.status(200).send(carts);
}

const getCartByID = async (req,res) => {
    let carts = await modelCarrito.getCartByID(req.params.id);
    res.status(200).send(carts);

}

const controllerCarrito = {
    getAllCarts,
    getCartByID
}


module.exports = controllerCarrito;