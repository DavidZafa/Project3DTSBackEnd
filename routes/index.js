const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const animalsController = require("../controllers/animals");
const newsController = require("../controllers/news");

//User Routes
router.post('/user/login', userController.createLogin)
router.post('/user/signup', userController.createSignUp)
// router.get('/user/logout', userController.logout)

router.get('/user/:id', userController.show)


// Animals routes
// router.get("/animals", animalsController.show)

//News routes
// router.get("/news", newsController.show)

//Error routes
router.all('*', (req,res) => {
    res.status(400), send()
})

module.exports = router