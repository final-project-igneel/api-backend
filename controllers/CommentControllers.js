const { comment, user } = require("../src/api/db/models");

const getComment = function(req, res) {
  comment.sequelize
    .query(
      `select comment from users as u, comments as c where u.id=c.userid and threadid=${req.params.threadid};`
    )
    .then(commentData => {
      // res.status(200).send(commentData)
      res.send(commentData[0])
    })
    .catch(function(error) {
      console.log(error);
    });

  // user
  //   .findAll({
  //     include: [{
  //       model: comment,
  //       where: { threadid: req.params.threadid }
  //     }]
  //   })
  //   .then(function(commentData) {
  //     console.log(commentData);
  //   })
  //   .catch(function(err) {  
  //     res.status(500).send(err)
  // });


};

const createComment = function(req, res) {
  comment
    .create(req.body)
    .then(data => {
      console.log(data);
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
