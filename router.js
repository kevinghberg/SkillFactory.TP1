const express = require ('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const infoToConsole = require('./middlewares/printInfo.js');
const errorHandler = require('./middlewares/errorHandler.js');
const orderHandler = require('./middlewares/orderHandler');

const productController = require('./controllers/controllerProducto.js');
const userController = require('./controllers/controllerUsuario.js');
const cartController = require('./controllers/controllerCarrito.js');


/* Products */
router.get('/products',[infoToConsole.printDate,infoToConsole.printMethod], productController.getProducts);
router.get('/prices',[infoToConsole.printDate,infoToConsole.printMethod,orderHandler.handleOrder],productController.getProductPrices);
router.get('/products/:id',[infoToConsole.printDate,infoToConsole.printMethod], productController.getProductById);
router.get('/products/categories/:category',[infoToConsole.printDate,infoToConsole.printMethod],productController.getProductsByCategory);
router.get('/expensive',[infoToConsole.printDate,infoToConsole.printMethod], productController.getExpensiveProducts);


/*Users*/
router.get('/users',[infoToConsole.printDate,infoToConsole.printMethod],userController.getUsers);
router.get('/users/firsts', [infoToConsole.printDate,infoToConsole.printMethod],userController.getFirstsUsers);
router.get('/users/:id',[infoToConsole.printDate,infoToConsole.printMethod], userController.getUser);


/* Cart */
router.get('/carts',[infoToConsole.printDate,infoToConsole.printMethod], cartController.getAllCarts);
router.get('/carts/:id', [infoToConsole.printDate,infoToConsole.printMethod],cartController.getCartByID);
router.get('/bigcarts',[infoToConsole.printDate,infoToConsole.printMethod], cartController.getBigCarts);


router.use(errorHandler.notFound);

module.exports = router;