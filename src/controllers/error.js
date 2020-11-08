const path = require('path')

exports.error404 = (req, res, next)=>{
    return res.status(404).render(path.join(__dirname, '../views/err/error404.ejs'))
}


exports.error500 = (req, res, next)=>{
    return res.status(500).render(path.join(__dirname, '../views/err/error500.ejs'))
}