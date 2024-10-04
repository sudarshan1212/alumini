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
router.post("/api/requestOTP", verifcationUser);
router.post("/api/verifyOTP", verfiyOtp);
router.post("/api/register", registerUser);
router.post("/api/login", loginUser);
router.post("/api/forgetpassword", forgetPasswordUser);
router.post("/api/updatepassword", updatePassword);
module.exports = router;
