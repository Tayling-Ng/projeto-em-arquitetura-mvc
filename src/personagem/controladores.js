const service = require('./service')

async function readAll(req, res) {
    const itens = await service.readAll()
    res.send(itens)
}

function readById(req, res) {
    res.send('Read By ID')
}

function create(req, res) {
    res.send('Create')
}

function updateById(req, res) {
    res.send('Update By ID')
}

function deleteById(req, res) {
    res.send('Delete By ID')
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}