const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

let getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}

let getCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
}

let getProductById = (id) => {
    return fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
}


function getProductByCategory(category) {
    return fetch(`https://fakestoreapi.com/products/category/` + category)
        .then(res => res.json());
}


const products = {
    getProducts,
    getCategories,
    getProductByCategory,
    getProductById
}

module.exports = products;