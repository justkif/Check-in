const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/user', userController.getAll);
router.get('/user/excel', userController.getAllExel);
router.put('/user', userController.updateAll);

module.exports = router;