const express = require('express')
// const { readAll, readById, create, updateById, deleteById } = require('./controladores')
// Ao invés de importar todos os controladores, importa o arquivo todo asim:
const controladores = require('./controladores')
const router = express.Router()

function teste(req, res) {
    res.send('Ok!')
}

router.get('/', controladores.readAll)
router.get('/:id', controladores.readById)
router.post('/', controladores.create)
router.put('/:id', controladores.updateById)
router.delete('/:id', controladores.deleteById)


module.exports = router