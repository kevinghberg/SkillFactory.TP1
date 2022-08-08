const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

const getAllCarts = () => {
    return fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json());
}

const getCartByID = (id) => {
   return fetch('https://fakestoreapi.com/carts/' + id)
    .then(res=>res.json());
}

const modelCarrito = {
    getAllCarts,
    getCartByID
}

module.exports=modelCarrito;