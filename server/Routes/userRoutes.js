const express = require("express");
const {
  verifcationUser,
  verfiyOtp,
  registerUser,
  loginUser,
  forgetPasswordUser,
  updatePassword,
} = require("../controllers/userControllers");
const router = express.Router();
router.post("/requestOTP", verifcationUser);
router.post("/verifyOTP", verfiyOtp);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgetpassword", forgetPasswordUser);
router.post("/updatepassword", updatePassword);
module.exports = router;
