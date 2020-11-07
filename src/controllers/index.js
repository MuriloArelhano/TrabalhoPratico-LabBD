const path = require('path')
const fs = require('fs')
const candidatoModel = require('../model/candidato')
const utils = require('../utils/utils')

exports.getIndexPage = (req, res) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        errorMessageStruture: null,
        errorMessageImport: null,
        successMessageStruture: null,
        successMessageImport: null
    })

}

exports.importAllData = (req, res) => {
    fs.readdir(path.join(__dirname, '../../data'), (error, filesNames) => {
        if (error) {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                errorMessageStruture: null,
                errorMessageImport: 'erro na leitura do diretório.',
                successMessageStruture: null,
                successMessageImport: null
            })

        } else {
            let currentFileJson;
            for (let currentFileName of filesNames) {

                try {
                    currentFileJson = fs.readFileSync(`${path.join(__dirname, '../../data', currentFileName)}`)
                    currentFileJson = JSON.parse(currentFileJson)
                } catch (e) {
                    return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                        errorMessageStruture: null,
                        errorMessageImport: 'erro com a leitura dos arquivos ou no parse do json.',
                        successMessageStruture: null,
                        successMessageImport: null
                    })
                }
                
                let candidato = utils.deleteCandidatoInfos(currentFileJson)
                console.log(currentFileJson);
                candidatoModel.insertNewCandidato(candidato)
                .then(res => { 
                    candidatoModel.insertNewCargo(candidato.id, currentFileJson.cargo)
                 })
                .catch(err => { console.log(err) })
                

            }
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                errorMessageStruture: null,
                errorMessageImport: null,
                successMessageStruture: null,
                successMessageImport: 'Dados importado com sucesso.'
            })

        }
    })
}


