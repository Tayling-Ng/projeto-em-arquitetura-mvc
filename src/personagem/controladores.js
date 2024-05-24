const service = require('./service')

async function readAll(req, res) {
    // Acessar a lista de personagens na collection do MongoDB
    const itens = await service.readAll()
    // Enviar a lista de personagens como resultado
    res.send(itens)
}

async function readById(req, res) {
    // Acessar o parâmetro id
    const id = req.params.id
    // Acessar o item personagem no service
    const item = await service.readById(id)

    if (!item) {
        return res.status(404).send('Item não encontrado.')
    }

    res.send(item)
}

async function create(req, res) {
    // Acessar o corpo da requisição
    const novoItem = req.body 
    
    // Validação: Verificar se a palavra "nome" está no corpo da requisição
    if (!novoItem || !novoItem.nome) {
    return res.status(400).send('O corpo da requisição tem que conter a propriedade "nome".')
    }

    // TODO: Validação: Verificar se o novo item já está na collection

    // Adicionar ua propriedade na coleção
    await service.create(novoItem)

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