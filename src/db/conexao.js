const { MongoClient } = require('mongodb')

// Informações do Banco de Dados
const dbUrl = process.env.DATABASE_URL
// Quando muda o nome do banco automaticamente cria um banco novo no MongoDB
const dbName = 'projeto-em-arquitetura-mvc'

// Declarar a função de conxeção com o Banco de dados
async function connectToDatabase() {
    const client = new MongoClient(dbUrl)
    // console.log('Conectando ao banco de dados...')
    await client.connect()
    // console.log('Banco de dados conectado com sucesso!')

    // Estabelecer a conexão com o Banco de dados
    const db = client.db(dbName)
}

module.exports = {
    connectToDatabase
}