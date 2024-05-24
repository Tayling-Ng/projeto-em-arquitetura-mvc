const { getDatabase } = require("../db/conexao")

// Criar uma função para o Banco de Dados ser acessado dentro de cada endpoint
function getCollection() {
    return getDatabase.collection('personagem')
}


function readAll() {
    return getCollection().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}

function deleteById() {
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}