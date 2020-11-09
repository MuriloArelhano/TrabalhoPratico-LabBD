const db = require('../app')
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

exports.insertNewbens = (idCandidato, bens) => {
    let promises = []
    for (const bem of bens) {
        let bemKeys = Object.keys(bem)
        let bemValues = Object.values(bem)
        let query = {
            text: `insert into trabalhofinal.bens (id_candidato, ${bemKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(bemValues)});`,
            values: bemValues
        }
        let currentPromisse = new Promise((resolve, reject) => {
            db.query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)

                })
        })

        promises.push(currentPromisse)
    }


    return Promise.all(promises)

}

exports.insertNewPartido = (idCandidato, partido) => {
    let partidoKeys = Object.keys(partido)
    let partidoValues = Object.values(partido)
    let query = {
        text: `insert into trabalhofinal.partido (id_candidato, ${partidoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(partidoValues)});`,
        values: partidoValues
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

exports.insertNewEleicao = (idCandidato, eleicao) => {
    let eleicaoKeys = Object.keys(eleicao)
    let eleicaoValues = Object.values(eleicao)
    let query = {
        text: `insert into trabalhofinal.eleicao (id_candidato, ${eleicaoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(eleicaoValues)});`,
        values: eleicaoValues
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

exports.insertNewEmail = (idCandidato, emails) => {
    let promises = []
    for (const email of emails) {
        let query = `insert into trabalhofinal.email (id_candidato, email) values (${idCandidato}, '${email}');`
        let currentPromisse = new Promise((resolve, reject) => {
            db.query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)

                })
        })

        promises.push(currentPromisse)
    }


    return Promise.all(promises)
}

exports.insertNewSite = (idCandidato, sites) => {
    let promises = []
    for (const site of sites) {
        let query = `insert into trabalhofinal.site (id_candidato, siteUrl) values (${idCandidato}, '${site}');`
        let currentPromisse = new Promise((resolve, reject) => {
            db.query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)

                })
        })

        promises.push(currentPromisse)
    }


    return Promise.all(promises)
}

exports.insertNewArquivo = (idCandidato, arquivos) => {
    let promises = []
    for (const arquivo of arquivos) {
        let arquivoKeys = Object.keys(arquivo)
        let arquivoValues = Object.values(arquivo)
        let query = {
            text: `insert into trabalhofinal.arquivo (id_candidato, ${arquivoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(arquivoValues)});`,
            values: arquivoValues
        }
        let currentPromisse = new Promise((resolve, reject) => {
            db.query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)

                })
        })

        promises.push(currentPromisse)
    }


    return Promise.all(promises)

}

exports.insertNewEleicãoAnterior = (idCandidato, eleicoes) => {
    let promises = []
    for (const eleicao of eleicoes) {
        let eleicaoKeys = Object.keys(eleicao)
        let eleicaoValues = Object.values(eleicao)
        let query = {
            text: `insert into trabalhofinal.eleicao_anterior (id_candidato, ${eleicaoKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(eleicaoValues)});`,
            values: eleicaoValues
        }
        let currentPromisse = new Promise((resolve, reject) => {
            db.query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)

                })
        })

        promises.push(currentPromisse)
    }


    return Promise.all(promises)

}

exports.insertNewEleicãoVices = (idCandidato, vices) => {
    let promises = []
    if (vices != null) {
        for (const vice of vices) {
            let viceKeys = Object.keys(vice)
            let viceValues = Object.values(vice)
            let query = {
                text: `insert into trabalhofinal.vices (id_candidato, ${viceKeys}) values (${idCandidato}, ${utils.createDynamicParamsQuery(viceValues)});`,
                values: viceValues
            }
            let currentPromisse = new Promise((resolve, reject) => {
                db.query(query)
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)

                    })
            })

            promises.push(currentPromisse)
        }


        return Promise.all(promises)
    }

}

