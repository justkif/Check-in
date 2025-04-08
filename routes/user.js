const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAll);
router.get('/user/scan', userController.getScan);
router.get('/user/scanned/:userId', userController.getScanned);
router.post('/user/register', userController.registerUser);
router.post('/user/login', userController.loginUser);
router.put('/user/passwordManager', userController.updatePasswordManager);
router.put('/user/password', userController.updatePassword);
router.put('/user/role', userController.updateRole);
router.put('/user/reset', userController.reset);
router.put('/user/scan', userController.updateScan);

module.exports = router;