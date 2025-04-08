const router = require('express').Router();
const runnerController = require('../controllers/runnerController');

router.get('/runner', runnerController.getAll);
router.get('/runner/:runnerId', runnerController.getOne);
router.get('/runner/generateQR/:runnerId', runnerController.generateQR);
router.get('runner/exportExcel', runnerController.exportExcel);
router.post('/runner/scanQR', runnerController.scanQR);

module.exports = router;