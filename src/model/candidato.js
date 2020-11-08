const db = require('../config/configApp')
const utils = require('../utils/utils')

exports.insertNewCandidato = (candidato) => {
    let candidatoKeys = Object.keys(candidato)
    let candidatoValues = Object.values(candidato)
    let query = {
        text: ` insert into trabalhofinal.candidato (${candidatoKeys}) values (${utils.createDynamicParamsQuery(candidatoValues)});`,
        values: candidatoValues
    }
    return new Promise((resolve, reject) => {
        db.query(query)
            .then(resp => {
                resolve(resp)
                
            })
            .catch(err => {
                reject(err)
            })
    })

}

exports.insertNewCargo = (idCandidato, cargo) => {
    let cargoKeys = Object.keys(cargo)
    let cargoValues = Object.values(cargo)
    let query = {
        text: `insert into trabalhofinal.cargo (id_candidato, ${cargoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(cargoValues)});`,
        values: cargoValues
    }

    return new Promise((resolve, reject) => {
        db.query(query)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)

            })
    })
}

exports.insertNewbens = () => {

}

exports.insertNewPartido = () => {

}

exports.insertNewEleicao = () => {

}

exports.insertNewEmail = () => {

}

exports.insertNewSite = async () => {

}

exports.insertNewArquivo = () => {

}

exports.insertNewEleicãoAnterior = () => {

}

