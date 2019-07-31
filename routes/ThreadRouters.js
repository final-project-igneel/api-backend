const express = require("express");
const router = express.Router();

const {
    getThread,
    createThread,
    editThread,
    deleteThread,
    searchThread
} = require("../controllers").Threads;

router.get("/", getThread);
router.post("/create", createThread);
router.put("/edit/:id", editThread);
router.delete("/delete/:id", deleteThread);
router.get("/search", searchThread);

module.exports = router;
