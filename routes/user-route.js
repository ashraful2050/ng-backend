const express = require('express');
const userController = require('../controllers/user-controller');
const router = express.Router();

router.get('/user/view',userController.getUserList);
router.post('/user/add',userController.getUserAdd);
router.get('/user/fetch/:id',userController.getUserById);
router.put('/user/update',userController.updateUser);
router.delete('/user/delete/:id',userController.deleteUser);
// router.get('/user/count',userController.countUser);

module.exports=router;