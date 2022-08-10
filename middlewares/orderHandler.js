const handleOrder = (req, res, next) => {
  let order = req.query.order;
  if (order === undefined) order = "asc";
  else if (order != "asc" && order != "desc")
    return res.status(400).json({ message: "Bad Request" });
  req.query.order = order;
  next();
};

const orderHandler = {
  handleOrder,
};

module.exports = orderHandler;
