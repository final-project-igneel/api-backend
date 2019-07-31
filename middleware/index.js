const { validationResult } = require("express-validator/check");
const { user } = require("../src/api/db/models");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const handleValidatorError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({
            message: "missing input or invalid input",
            errors: errors.array()
        });
        throw new Error(errors.array());
    }
    next();
};

const isAuthorized = async (req, res, next) => {
    let token =
        req.headers.authorization && req.headers.authorization.split("")[1];
    if (!token || token.length <= 0) {
        return res.status(401).send({
            message: "Token not found"
        });
    }
    try {
        const verify = jwt.verify(token, JWT_SECRET);
        const users = await user.findByPk(verify.id);
        if (users === null) {
            return res.status(401).send({
                message: "Token invalid"
            });
        }
        req.auth = users;
        next();
    } catch (error) {
        res.status(401).send({
            message: "Token error"
        });
        throw new Error(error);
    }
};

module.exports = {
    handleValidatorError,
    isAuthorized,
    user: require("./UserMiddleware")
};
