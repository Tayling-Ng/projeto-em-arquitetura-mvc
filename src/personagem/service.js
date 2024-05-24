const { ObjectId } = require('mongodb')
const { getDatabase } = require("../db/conexao")

// Criar uma função para o Banco de Dados ser acessado dentro de cada endpoint
function getCollection() {
    return getDatabase().collection('personagem')
}

function readAll() {
    // Acessar a lista de personagens na collection do MongoDB
    return getCollection().find().toArray()
}

function readById() {
    // Retornar o item na collection usando o ID
    return getCollection().findOne({ _id: new ObjectId(id) })
}

function create() {
    // Adicionar na collection
    return getCollection().insertOne(newItem)
}

function updateById() {
    // Atualizamos na collection o newItem pelo ID
    return getCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: newItem }
  )
}

function deleteById() {
     // Remover o item da collection usando o ID
    return getCollection().deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}