const router = require('express').Router()
const indexController = require('../controllers/index')

router.get('', indexController.getIndexPage)
router.post('/import/all-data', indexController.importAllData)

module.exports = router