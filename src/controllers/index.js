const path = require('path')
const fs = require('fs')
const candidatoModel = require('../model/candidato')

exports.getIndexPage = (req, res) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        filesNameList: '',
        errorMessage: null
    })

}

exports.importAllData = (req, res) => {

    fs.readdir(path.join(__dirname, '../../data'), (error, filesNames) => {
        if (error) {
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                filesNameList: '',
                errorMessage: 'Provavel que deu pau.'
            })

        } else {

            let currentFileJson;
            for (let currentFileName of filesNames) {

                try {
                    currentFileJson = fs.readFileSync(`${path.join(__dirname, '../../data', currentFileName)}`)
                    currentFileJson = JSON.parse(currentFileJson)
                    let cargo = currentFileJson.cargo
                    let bens = currentFileJson.bens
                    let partido = currentFileJson.partido
                    let eleicao = currentFileJson.eleicao
                    let emails = currentFileJson.emails
                    let sites = currentFileJson.sites
                    let arquivos = currentFileJson.arquivos
                    let eleicoesAnteriores = currentFileJson.eleicoesAnteriores
                    let candidato = deleteCandidatoInfos(currentFileJson)
                    console.log(candidato)
                } catch (e) {
                    console.log(e)
                }

            }
            return res.render(path.join(__dirname, '../views/pages/index.ejs'), {
                filesNameList: filesNames,
                errorMessage: null
            })

        }
    })



}


function deleteCandidatoInfos(candidato) {
    let filteredCandidato = candidato
        delete filteredCandidato.cargo
        delete filteredCandidato.bens
        delete filteredCandidato.partido
        delete filteredCandidato.eleicao
        delete filteredCandidato.emails
        delete filteredCandidato.sites
        delete filteredCandidato.arquivos
        delete filteredCandidato.eleicoesAnteriores
    return filteredCandidato
}