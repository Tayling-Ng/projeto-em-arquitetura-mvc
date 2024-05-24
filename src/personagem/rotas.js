const express = require('express')
const { readAll, readById, create, updateById, deleteById } = require('./controladores')
const router = express.Router()

function teste(req, res) {
    res.send('Ok!')
}

router.get('/', readAll) // read all
router.get('/:id', readById) // read by id
router.post('/', create) // create
router.put('/:id', updateById) // update
router.delete('/:id', deleteById) // delete


module.exports = router