const { user, thread, comment } = require("../src/api/db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const userAuthentication = async (req, res) => {
    try {
        const users = await user.findOne({
            where: {
                email: req.body.email
            }
        });

        if (users === null) {
            return res.status(401).send({
                message: "users not found"
            });
        }

        const compare = bcrypt.compareSync(req.body.password, users.password);

        if (!compare) {
            return res.status(401).send({
                message: "Password doesn't match"
            });
        }

<<<<<<< HEAD
        const token = jwt.sign(
            {
                users
            },
            JWT_SECRET
        );

        return res.send({
            message: "Successfully signed in",
            data: {
                token
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "There is an internal server error"
        });
        throw new Error(error);
    }
=======
    const token = jwt.sign(
      {
        users
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.send({
      message: "Successfully signed in",
      data: {
        token
      }
    });
  } catch (error) {
    res.status(500).send({
      message: "There is an internal server error when giving Authentication to user",
      error
    });
  }
>>>>>>> d828d0b4b15633aff26dafb350a3c845dd37fcf9
};

const userRegistration = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const users = await user.findOne({
            where: {
                email: req.body.email
            }
        });

<<<<<<< HEAD
        if (users !== null) {
            return res.status(401).send({
                message: "users already registered"
            });
        }

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        const create = await user.create({
            firstName,
            lastName,
            email,
            password: hash
        });

        return res.status(201).send({
            message: "successfully registered in",
            create
        });
    } catch (error) {
        res.status(500).send({
            message: "There is an internal server error"
        });
        throw new Error(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const remove = await user.findByPk(req.params.id);
        remove.delete();
        res.send({
            message: "User successfully deleted!"
        });
    } catch (error) {
        res.send({
            message: "Failed to delete User"
        });
        throw new Error(error);
    }
=======
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const create = await user.create({
      firstName,
      lastName,
      email,
      password: hash
    });

    return res.status(201).send({
      message: "successfully registered in",
      create
    });
  } catch (error) {
    res.status(500).send({
      message: "There is an internal server error at user registration",
      error
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const remove = await user.findByPk(req.params.id);
    remove.delete();
    res.send({
      message: "User successfully deleted!"
    });
  } catch (error) {
    res.send({
      message: "Failed to delete User",
      error
    });
  }
>>>>>>> d828d0b4b15633aff26dafb350a3c845dd37fcf9
};

const updateUser = async (req, res) => {
    try {
        const editUser = await user.findByPk(req.params.id);

        if (editUser === null) {
            return res.send({ message: "User not found" });
        }

        editUser.update(
            { name: req.body.name },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.json({
            message: "user berhasil diupdate",
            editUser
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllUser = function(req, res, next) {
    user.findAll({
        include: [
            {
                model: thread,
                include: [
                    {
                        model: comment
                    }
                ]
            },
            {
                model: comment
            }
        ]
    })
        .then(data => res.send(data))
        .catch(error => console.log(error));
};

module.exports = {
    userAuthentication,
    userRegistration,
    deleteUser,
    updateUser,
    getAllUser
};
