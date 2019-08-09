const { thread, comment } = require("../src/api/db/models");
const db = require("../src/api/db/models/index");
const sequelize = require("sequelize");

const getThread = function(req, res) {
  thread
    .findAll({
      order: [["id", "DESC"]]
    })
    .then(data => res.status(200).send(data))
    .catch(error => console.log(error));
};

const getOneThread = function(req, res) {
  thread
    .findOne({
      where: {
        id: `${req.params.id}`
      }
    })
    .then(data => {
      res.status(200).send({
        data
      });
    })
    .catch(error => {
      res.status(500).send({
        error
      });
    });
};

const createThread = function(req, res) {
  thread
    .create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
};

const updateThreadLike = function(req, res) {
  thread.sequelize
    .query(`SELECT likedThread FROM threads where id=${req.body.questionId}`)
    .then(questionData => {
      let arrayOfLikers = questionData[0][0].likedThread.split(",");
      thread
        .update(
          { likedThread: req.body.usersId },
          { where: { id: req.params.id } }
        )
        .then(data => {
          res.send(data)
        })
        .catch(function(error) {
          console.log(error);
        });
    });
};

const editThread = function(req, res) {
  thread
    .update(
      {
        title: req.body.newTitle
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(data => {
      res.status(201).send({
        message: "Updated!",
        data
      });
    })
    .catch(error => {
      res.status(500).send({
        message: "Thread Failed to Update!",
        error
      });
    });
};

const deleteThread = function(req, res) {
  thread
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
  getThread,
  getOneThread,
  createThread,
  updateThreadLike,
  editThread,
  deleteThread
};
