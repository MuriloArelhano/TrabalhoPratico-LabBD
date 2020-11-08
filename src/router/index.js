const router = require('express').Router()
const indexController = require('../controllers/index')
const dbController = require('../controllers/db')

router.get('', indexController.getIndexPage)
router.post('/import/all-data', indexController.importAllData)
router.post('/import/structure', dbController.insertStructure)

module.exports = router