const service = require('./service')

async function readAll(req, res) {
    const itens = await service.readAll()
    res.send(itens)
}

async function readById(req, res) {
    const id = req.params.id
    const item = await service.readById(id)
    res.send(item)
}

async function create(req, res) {
    const novoItem = req.body
    res.status(201).send(novoItem)
}

async function updateById(req, res) {
    const id = req.params.id
    const novoItem = req.body

    if (!newItem || !newItem.nome) {
        return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
      }
    await service.updateById(id, novoItem)

    res.send(novoItem)
}

async function deleteById(req, res) {
    const id = req.params.id
    await service.deleteById(id)
    res.send('Item removido com sucesso: ' + id)
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}