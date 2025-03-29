const qrController = require('../controllers/qrController');
const router = require('express').Router();

router.get('/generate-qr/:userId', qrController.generateQR);
router.post('/scan-qr', qrController.scanQR);

module.exports = router;