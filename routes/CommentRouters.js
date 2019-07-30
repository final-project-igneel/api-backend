var express = require("express");
var router = express.Router();

const {
  getComment,
  createComment,
  deleteComment
} = require("../controllers").Comments

router.get("/", getComment)
router.post("/create", createComment);
router.delete("/delete/:id", deleteComment)

module.exports = router;