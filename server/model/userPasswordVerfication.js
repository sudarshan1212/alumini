const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userPasswordVerificationSchema = new Schema({
  userId: String,
  hashedOTP: String,
  createdAt: Date,
  expiresAt: Date,
});
const userPasswordVerification = mongoose.model(
  "forgetPassword",
  userPasswordVerificationSchema
);
module.exports = userPasswordVerification;
