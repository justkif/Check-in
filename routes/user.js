const router = require('express').Router();
const userController = require('../controllers/userController');
const jwtController = require('../controllers/jwtController');

router.get('/user', jwtController.verifyManager, userController.getAll);
router.get('/user/scan', jwtController.verifyManager, userController.getScan);
router.get('/user/scanned/:userId', jwtController.verifyScanner, userController.getScanned);
router.post('/user/register', jwtController.verifyManager, userController.registerUser);
router.post('/user/login', userController.loginUser);
router.put('/user/passwordManager', jwtController.verifyManager, userController.updatePasswordManager);
router.put('/user/password', jwtController.verifyRunner, userController.updatePassword);
router.put('/user/role', jwtController.verifyManager, userController.updateRole);
router.put('/user/scan', jwtController.verifyManager, userController.updateScan);

module.exports = router;