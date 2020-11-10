const path = require('path')
const fs = require('fs')
const db = require('../app')

exports.insertStructure = (req, res, next) => {
    fs.readFile(path.join(__dirname, '../../db', 'estrutura.sql'), (err, data) => {
        if (err) {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                resultStatus: 'StructureDatebaseError',
                errorMessage: err
            })
        }
        else {
            db.query(data.toString())
                .then(resp => {
                    return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                        resultStatus: 'StructureDatebaseSucess',
                        errorMessage: null
                    })
                })
                .catch(err => {
                    return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                        resultStatus: 'StructureDatebaseError',
                        errorMessage: err
                    })
                })


        }
    })

}

