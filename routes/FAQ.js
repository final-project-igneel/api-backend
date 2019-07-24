var express = require("express");
var router = express.Router();

let connection = require("../config/dbConnection");

router.get("/FAQ", function(req, res, next) {
  connection.query("SELECT * FROM FAQ", (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.send(rows);
    }
  });
});

router.get("/FAQ/:id", function(req, res, next) {
  connection.query(`SELECT * FROM FAQ WHERE question_id = ${req.params.id}`, (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
