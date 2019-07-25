var express = require("express");
var router = express.Router();

let connection = require("../config/dbConnection");

router.get("/Questions", function(req, res, next) {
  connection.query("SELECT * FROM Questions", (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
