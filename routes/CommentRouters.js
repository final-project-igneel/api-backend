var express = require("express");
var router = express.Router();

const {
  getComment,
  createComment,
  deleteComment
} = require("../controllers").Comments

router.get("/:threadid", getComment)
router.post("/create", createComment);
router.delete("/delete/:id", deleteComment)

module.exports = router;
/* GET home page. */
// router.get("/", function(req, res, next) {
//   db.comment
//     .findAll()
//     .then(data => res.send(data))
//     .catch(error => res.send(error));
// });

// router.post("/add_comment", function(req, res, send) {
//   db.comment
//     .create(req.body)
//     .then(data => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// router.delete("/delete_comment/:id", function(req, res, send) {
//   db.comment
//   .destroy({
//     where: {
//       id: `${req.params.id}`
//     }
//   })
//   .then(data => {
//     res.status(201).send({
//       message: "Deleted!",
//       data
//     });
//   })
//   .catch(error => {
//     res.status(500).send({
//       message: "Comment Failed to Delete!",
//       error
//     });
//   });
// });

