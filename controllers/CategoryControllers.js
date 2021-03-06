const { thread } = require("../src/api/db/models");

const PhoneCategory = function(req, res) {
  thread
    .findAll({
      where: {
        category: "phone"
      },
      order: [["id", "DESC"]]
    })
    .then(data => res.send(data))
    .catch(error =>
      res.send({
        message: "Data phone not found",
        error
      })
    );
};

const LaptopCategory = function(req, res) {
  thread
    .findAll({
      where: {
        category: "laptop"
      },
      order: [["id", "DESC"]]
    })
    .then(data => res.send(data))
    .catch(error => res.send(error));
};

const ComputerCategory = function(req, res) {
  thread
    .findAll({
      where: {
        category: "computer"
      },
      order: [["id", "DESC"]]
    })
    .then(data => res.send(data))
    .catch(error => res.send(error));
};

module.exports = {
  PhoneCategory,
  LaptopCategory,
  ComputerCategory
};
