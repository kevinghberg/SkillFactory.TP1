const e = require("express");
const modelProducto = require("../models/modelProducto");

const getProducts = async (req, res) => {
  let products = await modelProducto.getProducts();
  res.status(200).send(products);
};

const getProductById = async (req, res) => {
  let productById = await modelProducto.getProductById(req.params.id);
  res.status(200).send(productById);
};

const getProductsByCategory = async (req, res) => {
  let productsByCategories = await modelProducto.getProductByCategory(
    req.params.category
  );
  let productsByCategories2 = productsByCategories.map((res) => {
    return {
      title: res.title,
      category: res.category,
    };
  });
  res.status(200).send(productsByCategories2);
};

const getProductPrices = async (req, res) => {
  let products = await modelProducto.getProducts();
  let products2 = products.map((res) => {
    return {
      id: res.id,
      title: res.title,
      price: res.price,
    };
  });
  let order = req.query.order;
  products2 = sortProductsByPrice(products2, order);
  res.status(200).send(products2);
};

const getExpensiveProducts = async (req, res) => {
  let products = await modelProducto.getProducts();
  let categories = await modelProducto.getCategories();
  let expensive = [];

  categories.forEach((element) => {
    let aux = products.filter((products) => products.category == element);
    aux.sort((a, b) => b.price - a.price);
    expensive.push(aux[0]);
  });

  res.status(200).send(expensive);
};

function sortProductsByPrice(products, order) {
  if (order == "ASC" || order == "asc")
    products = products.sort((a, b) => a.price - b.price);
  if (order == "DESC" || order == "desc")
    products = products.sort((a, b) => b.price - a.price);
  return products;
}

const controllerProducto = {
  getProductsByCategory,
  getProducts,
  getProductById,
  getProductPrices,
  getExpensiveProducts,
};

module.exports = controllerProducto;
