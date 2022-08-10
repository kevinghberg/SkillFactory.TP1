const notFound = (req, res, next) => {
  return res.status(404).json({ message: "Pagina no encontrada" });
};

const errorHandler = {
  notFound,
};

module.exports = errorHandler;
