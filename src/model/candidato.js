const db = require('../config/configApp')
const utils = require('../utils/utils')

exports.insertNewCandidato = (candidato) => {
    let candidatoKeys = Object.keys(candidato)
    let candidatoValues = Object.values(candidato)
    let query = {
        text: ` insert into trabalhofinal.candidato (${candidatoKeys}) values (${utils.createDynamicParamsQuery(candidatoValues)});`,
        values: candidatoValues
    }
    return new Promise((success, fail) => {
        db.query(query)
        .then(resp=>{
            success(resp)
        })
        .catch(err=>{
            fail(err)
        })
    })

}

exports.insertNewCargo = (idCandidato, cargo) => {
    console.log(cargo);
    let cargoKeys = Object.keys(cargo)
    let cargoValues = Object.values(cargo)
    let query = {
        text: `insert into trabalhofinal.cargo (id_candidato, ${cargoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(cargoValues)});`,
        values: cargoValues
    }
    
    return new Promise((success, fail) => {
        db.query(query)
        .then(resp=>{
            success(resp)
        })
        .catch(err=>{
            fail(err)
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

exports.insertNewSite = () => {

}

exports.insertNewArquivo = () => {

}

exports.insertNewEleicãoAnterior = () => {

}

