const { comment, user } = require("../src/api/db/models");

const getComment = function(req, res) {
  comment
    .findAll({
      include: [
        {
          model: user
        }
      ],
      order: [["id", "ASC"]]
    })
    .then(function(commentData) {
      res.status(200).json({
        message: "ini data dari user dan komennya",
        commentData
      });
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

const createComment = function(req, res) {
  comment
    .create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteComment = function(req, res) {
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
};
