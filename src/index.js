require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/conexao')
const personagemRouter = require('./personagem/rotas')
// const { MongoClient, ObjectId } = require('mongodb')

// Declarar a função de conxeção com o Banco de dados
async function main() {
    // FIX: Utilizar a connectToDatabase() e receber o DB
    await connectToDatabase()

    const app = express()

    // Receber o corpo da requisição em json
    app.use(express.json())

    // const collection = db.collection('personagem')

    // Requisição GET: http://localhost:3000
    app.get('/', function (req, res) {
        res.send('Hi Folks!')
    })

    app.use('/personagem', personagemRouter)

    // FIX: Mover isso para a pasta personagem
    /*


    // Endpoint Delete: [DELETE] /personagem/:id
    // Requisição DELETE: http://localhost:3000/personagem/id
    app.delete('/personagem/:id', async function (req, res) {

        // Acessar o parâmetro id
        const id = req.params.id

        // Validação: Chegar se o item na requisição está na lista
        if (!ObjectId.isValid(id)) {
            return res.status(400).send('Item não encontrado.');
        }

        // Remover o item da collection usando id - 1
        await collection.deleteOne({ _id: new ObjectId(id) }) 

        res.send('Item removido com sucesso: ' + id)
    })
}
*/
app.listen(3000, function() {
    console.log("Servidor rodando em http://localhost:3000")
})

}

// Executa a função main() para conectar o Banco de Dados.
main()