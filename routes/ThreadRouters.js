const express = require("express");
const router = express.Router();

const {
  getThread,
  getOneThread,
  createThread,
  updateThreadLike,
  editThread,
  deleteThread
} = require("../controllers").Threads;

const {
  PhoneCategory,
  LaptopCategory,
  ComputerCategory
} = require("../controllers/").Categories

router.get("/", getThread);
router.get("/:id", getOneThread);
router.post("/create", createThread);
router.put("/:id", updateThreadLike);
router.put("/edit/:id", editThread);
router.delete("/delete/:id", deleteThread);

router.get("/category/phones", PhoneCategory);
router.get("/category/laptops", LaptopCategory);
router.get("/category/computers", ComputerCategory);

module.exports = router;
