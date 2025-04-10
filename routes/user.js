const router = require('express').Router();
const userController = require('../controllers/userController');
const jwtController = require('../controllers/jwtController');

router.get('/user', jwtController.verifyAdmin, userController.getAll);
router.get('/user/scan', jwtController.verifyAdmin, userController.getScan);
router.get('/user/scanned/:userId', jwtController.verifyScanner, userController.getScanned);
router.post('/user', jwtController.verifyAdmin, userController.createAll);
router.post('/user/register', jwtController.verifyAdmin, userController.registerUser);
router.post('/user/login', userController.loginUser);
router.put('/user/passwordAdmin', jwtController.verifyAdmin, userController.updatePasswordAdmin);
router.put('/user/password', jwtController.verifyRunner, userController.updatePassword);
router.put('/user/role', jwtController.verifyAdmin, userController.updateRole);
router.put('/user/scan', jwtController.verifyAdmin, userController.updateScan);

module.exports = router;