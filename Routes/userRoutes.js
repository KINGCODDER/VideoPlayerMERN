const express = require("express");
const app = express();
const authController = require("../controller/authController.js");
const { body } = require("express-validator");
const fetchUser = require("../utils/fetchUser");
const router = express.Router();

router.route("/signup").post(
  [
    body("email", "Enter a valid name").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  authController.signup
);
router.route("/login").post(authController.login);

router
  .route("/verify-token")
  .get(authController.fetchUser, authController.verify);

module.exports = router;
