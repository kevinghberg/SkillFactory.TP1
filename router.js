const express = require ('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const productController = require('./controllers/controllerProducto.js');
const userController = require('./controllers/controllerUsuario.js');
const cartController = require('./controllers/controllerCarrito.js')

/* Products */
router.get('/products',productController.getProducts);
router.get('/prices', productController.getProductPrices);
router.get('/products/:id', productController.getProductById);
router.get('/products/categories/:category',productController.getProductsByCategory);


/*Users*/
router.get('/users',userController.getUsers);
router.get('/users/firsts', userController.getFirstsUsers);
router.get('/users/:id', userController.getUser);

/* Cart */
router.get('/carts', cartController.getAllCarts);
router.get('/carts/:id', cartController.getCartByID);




module.exports = router;