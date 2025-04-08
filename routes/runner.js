const router = require('express').Router();
const runnerController = require('../controllers/runnerController');
const jwtController = require('../controllers/jwtController');

router.get('/runner', jwtController.verifyManager, runnerController.getAll);
router.get('/runner/:runnerId', jwtController.verifyScanner, runnerController.getOne);
router.get('/runner/generateQR/:runnerId', jwtController.verifyRunner, runnerController.generateQR);
router.get('runner/exportExcel', jwtController.verifyManager, runnerController.exportExcel);
router.post('/runner/scanQR', jwtController.verifyScanner, runnerController.scanQR);

module.exports = router;