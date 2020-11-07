exports.deleteCandidatoInfos = (candidato) => {
    let copyCandidato = Object.assign({}, candidato)
    delete copyCandidato.cargo
    delete copyCandidato.bens
    delete copyCandidato.partido
    delete copyCandidato.eleicao
    delete copyCandidato.emails
    delete copyCandidato.sites
    delete copyCandidato.arquivos
    delete copyCandidato.eleicoesAnteriores
    return copyCandidato
}


exports.createDynamicParamsQuery = (candidatoValues) => {
    var paramsArray = []
    candidatoValues.forEach((value, index) => {
        paramsArray.push(`$${index + 1}`)
    })
    return paramsArray
}