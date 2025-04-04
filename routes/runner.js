const router = require('express').Router();
const runnerController = require('../controllers/runnerController');

router.get('/runner', runnerController.getAll);
router.get('/runner/:runnerId', runnerController.getOne);
router.get('/runner/generate-qr/:runnerId', runnerController.generateQR);
router.get('/runner/excel', runnerController.exportExcel);
router.post('/runner/scan-qr', runnerController.scanQR);
router.put('/runner/reset', runnerController.updatePresent);
router.put('/runner/image', runnerController.updateImage);

module.exports = router;