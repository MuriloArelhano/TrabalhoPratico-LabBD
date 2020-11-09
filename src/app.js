// Professor, ia comentar o código.... mas eu sei que você usa Node.
const path = require('path')
const express = require('express')
const pg = require('pg')
const appConfig = {
    port: 3000
}
// COnfiguração do banco de dados
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'trabalhopratico',
    password: 'trabalhopratico',
    port: 5432,
}
const client = new pg.Client(dbConfig)
module.exports = client

// Import das rotas e controllers
const indexRouter = require('./router/index')
const errorController = require('./controllers/error')


const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use(errorController.error404)

app.use((err, req, res, next) => {
    res.status(500)
        .render(path.join(__dirname, 'views/err/error500.ejs'), {
            details: err
        })
})

client.connect()
    .then(resp => {
        console.log(`Banco de dados inicializado com sucesso 🏛🎲, na porta ${dbConfig.port}`)
        app.listen(appConfig.port, () => {
            console.log(`Servidor iniciado com sucesso 🚀🎲, na porta ${appConfig.port}`)

        })

    })
    .catch(err => {
        console.log(`Ocorreu um erro ao conectar com o Postgres: ${err}`)
        app.listen(appConfig.port, () => {
            console.log(`Servidor iniciado com sucesso 🚀🎲, na porta ${appConfig.port}`)

        })
    })


