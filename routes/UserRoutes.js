const router = require("express").Router();
const {
  userRegistration,
  userAuthentication,
  deleteUser,
  updateUser,
  getAllUser
} = require("../controllers").Users;


router.get("/", getAllUser)
router.post("/signin", userAuthentication);
router.post("/signup", userRegistration);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser)

module.exports = router;