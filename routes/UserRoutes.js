const router = require("express").Router();
const { user: Middleware, handleValidatorError } = require("../middleware");
const {
  userRegistration,
  userAuthentication,
  updateUser,
  getAllUser
} = require("../controllers").Users;
const { checkSigninField, checkSignupField } = Middleware;

router.get("/", getAllUser);
router.post(
  "/signin",
  checkSigninField,
  handleValidatorError,
  userAuthentication
);
router.post(
  "/signup",
  checkSignupField,
  handleValidatorError,
  userRegistration
);
router.put("/update/:id", updateUser);

module.exports = router;
