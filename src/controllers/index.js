const path = require('path')
const fs = require('fs')
const candidatoModel = require('../model/candidato')
const utils = require('../utils/utils')

exports.getIndexPage = (request, response, next) => {
    response.render(path.join(__dirname, '../views/pages/index.ejs'), {
        resultStatus: '',
        errorMessage: null
    })

}

/**
 * 
 * @param {Request} request
 * @param {Response} response 
 */
exports.importAllData = async (request, response, next) => {
    let filesNames = fs.readdirSync(path.join(__dirname, '../../data'))
    let currentFileJson;

    for (const currentFileName of filesNames) {
        try {
            // Construiu o JSON do candidato atual
            currentFileJson = fs.readFileSync(`${path.join(__dirname, '../../data', currentFileName)}`)
            currentFileJson = JSON.parse(currentFileJson)
            let candidato = utils.deleteCandidatoInfos(currentFileJson)
            await candidatoModel.insertNewCandidato(candidato)
            await candidatoModel.insertNewCargo(candidato.id, currentFileJson.cargo)
            await candidatoModel.insertNewbens(candidato.id, currentFileJson.bens)
            await candidatoModel.insertNewPartido(candidato.id, currentFileJson.partido)
            await candidatoModel.insertNewEleicao(candidato.id, currentFileJson.eleicao)
            await candidatoModel.insertNewEmail(candidato.id, currentFileJson.emails)
            await candidatoModel.insertNewSite(candidato.id, currentFileJson.sites)
            await candidatoModel.insertNewArquivo(candidato.id, currentFileJson.arquivos)
            await candidatoModel.insertNewEleicãoAnterior(candidato.id, currentFileJson.eleicoesAnteriores)
            await candidatoModel.insertNewEleicãoVices(candidato.id, currentFileJson.vices)
        } catch (e) {
            // Renderiza a pagina de erros
            return response.render(path.join(__dirname, '../views/pages/index.ejs'), {
                resultStatus: 'ImportDataError',
                errorMessage: e.message

            })
        }
        
    }


    return response.render(path.join(__dirname, '../views/pages/index.ejs'), {
        resultStatus: 'ImportDataSucess',
        errorMessage: null
    })

}


