const { comment } = require("../src/api/db/models");

const getComment = function (req, res) {
   comment.findAll()
    .then(data => res.send(data))
    .catch(error => console.log(error))
};

const createComment = function (req, res) {
  comment.create(req.body)
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(error => {
    console.log(error);
  });
};

const deleteComment = function (req, res) {
  comment
  .destroy({
    where: {
      id: `${req.params.id}`
    }
  })
  .then(data => {
    res.status(201).send({
      message: "Deleted!",
      data
    });
  })
  .catch(error => {
    res.status(500).send({
      message: "Thread Failed to Delete!",
      error
    });
  });
};

module.exports = {
  getComment,
  createComment,
  deleteComment
}
