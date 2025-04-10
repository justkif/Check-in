const router = require('express').Router();
const runnerController = require('../controllers/runnerController');
const jwtController = require('../controllers/jwtController');

router.get('/runner', jwtController.verifyManager, runnerController.getAll);
router.get('/runner/:runnerId', jwtController.verifyScanner, runnerController.getOne);
router.get('/runner/generate/QR', jwtController.verifyRunner, runnerController.generateQR);
router.get('/runner/export/excel', jwtController.verifyManager, runnerController.exportExcel);
router.post('/runner/scanQR', jwtController.verifyScanner, runnerController.scanQR);
router.put('/runner/reset', jwtController.verifyAdmin, runnerController.reset);

module.exports = router;