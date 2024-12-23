// auth-routes.js
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { SignupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(SignupSchema), authControllers.register);
router.route("/verify-otp").post(authControllers.verifyOTP); // New route for OTP verification
router.route("/login").post(validate(loginSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);
router.route("/update").patch(authMiddleware, authControllers.updateUser);
router.route("/reset-password").post(authControllers.resetPassword);

module.exports = router;
