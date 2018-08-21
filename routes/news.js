const express = require("express");
const router = express.Router();
const newsController = require("../controllers/news");

router.get("/api", newsController.index)

module.exports = router