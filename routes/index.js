const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const animalsController = require("../controllers/animals");
const newsController = require("../controllers/news");

//User Routes



// Animals routes
router.get("/animals", animalsController.show)

//News routes
router.get("/news", newsController.show)

//Error routes
router.all('*', (req,res) => {
    res.status(400), send()
})

module.exports = router