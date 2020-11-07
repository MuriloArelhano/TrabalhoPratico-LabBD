const path = require('path')
const fs = require('fs')
const db = require('../config/configApp')

exports.insertStructure = (req, res) => {
    fs.readFile(path.join(__dirname, '../../db', 'estrutura.sql'), (err, data) => {
        if (err) {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                errorMessageStruture: err,
                errorMessageImport: null,
                successMessageStruture: null,
                successMessageImport: null
            })
        }
        else {
            db.query(data.toString())
                .then(resp => {
                    return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                        errorMessageStruture: null,
                        errorMessageImport: null,
                        successMessageStruture: 'Estrutura importada com sucesso.',
                        successMessageImport: ''
                    })
                })
                .catch(err => {
                    return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                        errorMessageStruture: err,
                        errorMessageImport: null,
                        successMessageStruture: null,
                        successMessageImport: null
                    })
                })


        }
    })

}

exports.deletAllData = (req, res) => {

    db.query('drop schema trabalhofinal')
        .then(resp => {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                errorMessageStruture: null,
                errorMessageImport: null,
                successMessageStruture: '',
                successMessageImport: ''
            })
        })
        .catch(err => {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                errorMessageStruture: err,
                errorMessageImport: null,
                successMessageStruture: null,
                successMessageImport: null
            })
        })



}