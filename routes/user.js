const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");


router.post('/login', userController.createLogin)
router.post('/signup', userController.createSignUp)
router.get('/:id', userController.show)
router.get(':id/add', userController.addAnimal)
module.exports = router;

// router.get('/user/logout', userController.logout)
