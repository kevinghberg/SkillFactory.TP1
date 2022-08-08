const express = require ('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const dates = require('./middlewares/printDate.js')
const errorHandler = require('./middlewares/errorHandler.js')

const productController = require('./controllers/controllerProducto.js');
const userController = require('./controllers/controllerUsuario.js');
const cartController = require('./controllers/controllerCarrito.js')

/* Products */
router.get('/products',[dates.myDate, dates.today, dates.month, dates.printDate], productController.getProducts);
router.get('/prices', productController.getProductPrices);
router.get('/products/:id', productController.getProductById);
router.get('/products/categories/:category',productController.getProductsByCategory);
router.get('/expensive', productController.getExpensiveProducts);


/*Users*/
router.get('/users',userController.getUsers);
router.get('/users/firsts', userController.getFirstsUsers);
router.get('/users/:id', userController.getUser);


/* Cart */
router.get('/carts', cartController.getAllCarts);
router.get('/carts/:id', cartController.getCartByID);
router.get('/bigcarts', cartController.getBigCarts);


router.use(errorHandler.notFound);

module.exports = router;