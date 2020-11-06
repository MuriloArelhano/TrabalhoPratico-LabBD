// Professor, ia comentar o código.... mas eu sei que você usa Node.
const path = require('path')
const express = require('express')
const { Pool } = require('pg')
const appConfig = {
    port: 3000
}
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'trabalhopratico',
    password: 'trabalhopratico',
    port: 5432,
}

const indexRouter = require('../router/index')

module.exports = function initApp(callback) {
    const app = express()
    const pool = new Pool(dbConfig)

    
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/'));
    app.use(express.static(path.join(__dirname, '../public')))

    app.use('/', indexRouter)

    pool.connect()
        .then(resp => {
            console.log(`Banco de dados inicializado com sucesso 🏛🎲, na porta ${dbConfig.port}`)
            app.listen(appConfig.port, () => {
                console.log(`Servidor iniciado com sucesso 🚀🎲, na porta ${appConfig.port}`)
                callback
            })
        })
        .catch(err => {
            console.log(`Ocorreu um erro ao conectar com o Postgres: ${err}`)
            app.listen(appConfig.port, () => {
                console.log(`Servidor iniciado com sucesso 🚀🎲, na porta ${appConfig.port}`)
                callback
            })
        })

}