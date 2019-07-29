const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message: "Welcome to FRAQS API"
  });
});

module.exports = {
  Root: router,
  User: require("./UserRoutes"),
  Thread: require("./ThreadRouters"),
  Comment: require("./CommentRouters.js")
}
