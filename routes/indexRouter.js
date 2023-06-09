const express = require("express");
const {body} = require("express-validator");
const indexControllers = require("../controllers/indexController");

const router = express.Router();

router.get("/", indexControllers.getHome);
router.post("/add-word", [body("word").notEmpty(), body("meaning").notEmpty()],indexControllers.postAddWord);
router.post("/delete-word", indexControllers.postDeleteWord);
router.post("/edit-word",[body("word").notEmpty(), body("meaning").notEmpty()] ,indexControllers.postEditWord);

module.exports = router;