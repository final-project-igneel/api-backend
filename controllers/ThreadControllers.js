const { thread, comment } = require("../src/api/db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getThread = function(req, res) {
    thread
        .findAll({
            // include: [{ model: comment, required: true }]
        })
        .then(data => res.send(data))
        .catch(error => console.log(error));
};

const createThread = function(req, res) {
    thread
        .create(req.body)
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(error => {
            console.log(error);
        });
};

const editThread = function(req, res) {
    thread
        .update({
            where: {
                id: `${req.params.id}`
            }
        })
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

// Search for data threads
const searchThread = function(req, res) {
    let { term } = req.query;

    // Make lowercase
    term = term.toLowerCase();

    thread
        .findAll({ where: { title: { [Op.like]: "%" + term + "%" } } })
        .then(data => res.render("data", { data }))
        .catch(err => console.log(err));
};

module.exports = {
    getThread,
    createThread,
    editThread,
    deleteThread,
    searchThread
};
