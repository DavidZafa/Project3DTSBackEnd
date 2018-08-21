const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");


router.post('/login', userController.createLogin)
router.post('/signup', userController.createSignUp)
router.get('/:id', userController.show)
router.put('/:id/add', userController.addAnimal)
router.delete('/:id/remove', userController.removeAnimal)
module.exports = router;

// router.get('/user/logout', userController.logout)
