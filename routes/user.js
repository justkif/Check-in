const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAll);
router.post('/user/register', userController.registerUser);
router.post('/user/login', userController.loginUser);
router.put('/user/password/:userId', userController.updatePassword);
router.put('/user/role/:userId', userController.updateRole);
router.delete('/user/:userId', userController.deleteOne);

module.exports = router;