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

router.get("/", getThread);
router.get("/:id", getOneThread);
router.post("/create", createThread);
router.put("/:id", updateThreadLike);
router.put("/edit/:id", editThread);
router.delete("/delete/:id", deleteThread)

module.exports = router;


// /* GET userss listing. */
// router.get("/", function(req, res, next) {
//   db.thread
//     .findAll({
//       include: [{ model: db.comment, required: true }]
//     })
//     .then(data => res.send(data))
//     .catch(error => console.log(error));
// });

// router.post("/add_thread", function(req, res) {
//   db.thread
//     .create(req.body)
//     .then(data => {
//       console.log(data);
//       res.send(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// router.put("/edit_thread/:id", function(req, res) {
//   db.thread
//   .update({
//     where: {
//       id: `${req.params.id}`
//     }
//   })
//   .then(data => {
//     res.status(201).send({
//       message: "Updated!",
//       data
//     });
//   })
//   .catch(error => {
//     res.status(500).send({
//       message: "Thread Failed to Update!",
//       error
//     });
//   });
// });

// router.delete("/delete_thread/:id", function(req, req) {
//   db.thread
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
//       message: "Thread Failed to Delete!",
//       error
//     });
//   });
// });

