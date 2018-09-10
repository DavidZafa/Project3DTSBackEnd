const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const animalsController = require("../controllers/animals");
const newsController = require("../controllers/news");

//User Routes
router.post("/user/login", userController.createLogin);
router.post("/user/signup", userController.createSignUp);
router.post("/user/:id/animal/name/add", userController.addAnimal);
router.delete("/user/:id/animal/name/delete", userController.removeAnimal);

router.get("/user/:id", userController.show);

// GET ALL ANIMALS
router.get("/animals", animalsController.index);

//GET SPECIFIC ANIMAL /:ID
router.get("/animals/:id", animalsController.singleAnimal);

//News routes
router.get("/news", newsController.index);

module.exports = router;
