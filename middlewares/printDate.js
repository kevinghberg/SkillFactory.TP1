let dates = {
    myDate,
    today,
    month,
    printDate
}

function myDate(req, res, next) {
    req.date = new Date();
    next();
}

function today(req, res, next) {
    let today = req.date;
    req.today = today.getDay();
    next();
}

function month(req, res, next) {
    let today = req.date;
    req.month = today.getMonth();
    next();
}

function printDate(req,res,next){
    console.log(req.date);
    next();
}

module.exports = dates;