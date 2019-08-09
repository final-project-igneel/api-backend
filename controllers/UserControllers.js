const { user, thread, comment } = require("../src/api/db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const TokenGenerator = require("../helpers/token-generator");

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

    const token = jwt.sign(
      {
        users
      },
      JWT_SECRET
    );

    return res.send({
      message: "Successfully signed in",
      data: {
        token,
        users
      }
    });
  } catch (error) {
    res.status(500).send({
      message: "There is an internal server error",
      error
    });
  }
};

const userRegistration = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const users = await user.findOne({
      where: {
        email: req.body.email
      }
    });

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
      message: "There is an internal server error",
      error
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const editUser = await user.findByPk(req.params.id);

    if (editUser === null) {
      return res.send({ message: "User not found" });
    }

    editUser.update(
      { firstName: req.body.firstName,
        lastName: req.body.lastName
    },
      {
        where: {
          id: req.params.id
        }
      }
    );

//     const tokenGenerator = new TokenGenerator("a", "a", {
//       algorithm: "HS256",
//       keyid: "1",
//       noTimestamp: false,
//     });
//     token = tokenGenerator.sign(
//       { firstName: "something" },
//       { audience: "myaud", issuer: "myissuer", jwtid: "1", subject: "user" }
//     );
//     setTimeout(function() {
//       token2 = tokenGenerator.refresh(token, {
//         verify: { audience: "myaud", issuer: "myissuer" },
//         jwtid: "2"
//       });
//       console.log(jwt.decode(token, { complete: true }));
//       console.log(jwt.decode(token2, { complete: true }));
//     }, 3000);

    res.json({
      message: "user berhasil diupdate",
      editUser
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = function(req, res, next) {
  user
    .findAll({
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
  updateUser,
  getAllUser
};
