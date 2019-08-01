const { check, validationResult } = require("express-validator/check");
const { user } = require("../src/api/db/models");

const checkSigninField = [check("email").exists(), check("password").exists()];

const checkSignupField = [
    check("firstName").exists(),
    check("lastName").exists(),
    check("email").exists(),
    check("password").exists()
];

module.exports = {
    checkSigninField,
    checkSignupField
};
