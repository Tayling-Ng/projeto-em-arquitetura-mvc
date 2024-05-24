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

    // Endpoint Create: [POST] /personagem
    // Escrever o corpo da requisição
        // Requisição POST: http://localhost:3000/personagem
    app.post('/personagem', async function (req, res) {

        // Acessar o corpo da requisição
        const novoItem = req.body 
        // console.log(body)

        // Validação: Verificar se a palavra "nome" está no corpo da requisição
        if (!novoItem || !novoItem.nome) {
            return res.status(400).send('O corpo da requisição tem que conter a propriedade "nome".')
        }

        // Validação: Verificar se o novo item já está na collection
        const existe = await collection.findOne({ nome: novoItem.nome });

        if (existe) {
        return res.status(409).send('Esse item já existe na lista.');
        }

        // Adicionar o valor da propriedade na collection
        await collection.insertOne(novoItem) 

        res.status(201).send(novoItem)
        // console.log(lista)
    })

    // Endpoint Update: [PUT] /personagem
    // Requisição PUT: http://localhost:3000/personagem/1
    app.put('/personagem/:id', async function (req, res) {

        // Acessar o parâmetro id
        const id = req.params.id 

        // Validação: Checar se o item na requisição está na lista
        if (!ObjectId.isValid(id)) {
            return res.status(400).send('Item não encontrado.');
        }

        // Acessar o corpo da requisição
        const novoItem = req.body 

        // Validação: Verificar se a palavra "nome" está no corpo da requisição
        if (!novoItem || !novoItem.nome) {
            return res.status(400).send('O corpo da requisição tem que conter a propriedade "nome".')
        }

        // Validação: Verificar se o novo item já está na collection
        const existe = await collection.findOne({ nome: novoItem.nome });

        if (existe) {
            return res.status(409).send('Esse item já existe na lista.');
        }

        // Atualizar na collection o novo item pelo id - 1
        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: novoItem}
        )

        res.status(201).send(novoItem)
    })

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