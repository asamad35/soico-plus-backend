const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/userMiddleware");
const {
  signup,
  login,
  allUsers,
  loginWithGoogle,
} = require("../controllers/userController");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/login-with-google").post(loginWithGoogle);
router.route("/search-users").get(isLoggedIn, allUsers);

module.exports = router;
