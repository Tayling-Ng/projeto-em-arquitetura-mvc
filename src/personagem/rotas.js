const express = require('express')
const router = express.Router()

function teste(req, res) {
    res.send('Ok!')
}

router.get('/', teste) // read all
router.get('/:id', teste) // read by id
router.post('/', teste) // create
router.put('/:id', teste) // update
router.delete('/:id', teste) // delete


module.exports = router