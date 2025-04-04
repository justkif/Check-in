const router = require('express').Router();
const scanController = require('../controllers/scanController');

router.get('/scan', scanController.getOne);
router.put('/scan', scanController.updateOne);

module.exports = router;