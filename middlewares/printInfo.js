let printInfo = {
  printDate,
  printMethod,
};

function printDate(req, res, next) {
  req.date = new Date();
  req.date = req.date.toTimeString();
  console.log("Fecha: ", req.date);
  next();
}

function printMethod(req, res, next) {
  console.log("Metodo:", req.method);
  next();
}

module.exports = printInfo;
