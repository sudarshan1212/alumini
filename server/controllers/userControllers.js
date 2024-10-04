const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userOTPVerification = require("../model/userOTPVerification");
const userPasswordVerfication = require("../model/userPasswordVerfication");
const nodeMailer = require("nodemailer");
const User = require("../model/userModel");
const {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} = require("../utils/emailTemplate.js");

require("dotenv").config();
const tranporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});
tranporter.verify((err, success) => {
  if (err) {
    console.log(err);
  }
  if (success) {
    console.log("Transportation verification:", success);
  }
});
const verifcationUser = asyncHandler(async (req, res) => {
  let { email } = req.body;
  if (!email) {
    res
      .status(400)
      .json({ Status: "INVALID", message: "Please enter the email" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      Status: "INVALID",
      message: "Enter valid Image",
    });
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    await userOTPVerification.deleteMany({ userId: userExists._id });

    if (userExists.verified == true && userExists.name != undefined) {
      return res
        .status(400)
        .json({ Status: "INVALID", message: "User Already Exists" });
    } else {
      sendOTPVerficationEmail(userExists, res);
    }
  } else {
    const user = new User({
      email: email,
      verfied: false,
    });
    user
      .save()
      .then((result) => {
        sendOTPVerficationEmail(result, res);
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ Status: "INVALID", message: "Error in verficationn" });
      });
  }
});
const sendOTPVerficationEmail = async ({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOption = {
      from: { name: "RJS ALUMNI ASSOCIATION", address: process.env.AUTH_EMAIL },
      to: email,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", otp),
    };
    const saltROunds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltROunds);
    const newOTPVerification = await new userOTPVerification({
      userId: _id,
      hashedOTP: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOTPVerification.save();
    await tranporter.sendMail(mailOption);
    res.status(200).json({
      Status: "PENDING",
      message: "Verification otp email sent",
      data: {
        userID: _id,
        otp,
        email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      Status: "INVALID",
      message: "Error Occured in setOTPVerficationEmail",
    });
  }
};
const registerUser = asyncHandler(async (req, res) => {
  let { email, name, password } = req.body;
  if (!name || !password || !email) {
    res
      .status(400)
      .json({ Status: "INVALID", message: "Please Enter the given Field" });
  }
  const userExists = await User.findOne({ email: email });

  if (userExists == null) {
    return res
      .status(400)
      .json({ Status: "INVALID", message: "Please Verify your Email" });
  } else {
    if (userExists || userExists.verfied === true) {
      const saltROunds = 10;
      const hashedPassword = await bcrypt.hash(password, saltROunds);
      const saveUser = await User.updateOne(
        { email: email },
        { name: name, password: hashedPassword }
      );
      res.status(200).json({ Status: "SUCCESS", message: saveUser });
    } else {
      res.status(400).json({ Status: "INVALID", message: "Your not verfied" });
    }
  }
});
const verfiyOtp = async (req, res) => {
  let { userId, otp } = req.body;
  if (!userId || !otp) {
    return res
      .status(400)
      .json({ Status: "INVALID", message: "Pls Enter the given details" });
  } else {
    const userOTPVerficationRecords = await userOTPVerification.find({
      userId,
    });
    if (userOTPVerficationRecords.length < 0) {
      return res
        .status(400)
        .json({ Status: "INVALID", message: "Register with your Email id" });
    } else {
      const { expiresAt } = userOTPVerficationRecords[0];
      const { hashedOTP } = userOTPVerficationRecords[0];
      if (expiresAt < Date.now()) {
        await userOTPVerification.deleteMany({ userId });
        res
          .status(400)
          .json({ Status: "INVALID", message: "OTP has been expired" });
      } else {
        const validOTP = await bcrypt.compare(otp, hashedOTP);
        if (!validOTP) {
          return res
            .status(400)
            .json({ Status: "INVALID", message: "Invalid OTP" });
        } else {
          const users = await User.findOne({ _id: userId }).populate();
          await User.updateOne({ _id: userId }, { verified: true });
          await userOTPVerification.deleteMany({ userId });
          res.status(200).json({
            Status: "VERIFIED",
            message: "Welcome",
            users,
          });
        }
      }
    }
  }
};
const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ Status: "INVALID", message: "Please enter the given field" });
  }
  User.findOne({ email })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (result) {
            res.status(200).json({ Status: "SUCCESS", message: user });
          } else {
            res
              .status(400)
              .json({ Status: "INVALID", message: "Password Incorrect" });
          }
        })
        .catch((err) => {
          res
            .status(400)
            .json({ Status: "INVALID", message: "Enter the password" });
        });
    })
    .catch((err) => {
      res.status(400).json({ Status: "INVALID", message: "Please Register" });
    });
});

const forgetPasswordUser = asyncHandler(async (req, res) => {
  let { email } = req.body;
  if (!email) {
    res
      .status(400)
      .json({ Status: "INVALID", message: "Please enter the given field" });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    await userPasswordVerfication.deleteMany({ userId: userExists._id });

    try {
      await sendOTPVerficationPassword(userExists, res);
    } catch (err) {
      return res
        .status(400)
        .json({ Status: "INVALID", message: "Please Register" });
    }
  } else {
    return res
      .status(400)
      .json({ Status: "INVALID", message: "Please Register" });
  }
});
const sendOTPVerficationPassword = async ({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOption = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify Your Email",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{verificationCode}", otp),
    };
    const saltROunds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltROunds);
    const newOTPVerification = await new userPasswordVerfication({
      userId: _id,
      hashedOTP: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOTPVerification.save();
    await tranporter.sendMail(mailOption);
    res.status(200).json({
      Status: "PENDING",
      message: "Verification otp email sent",
      data: {
        userID: _id,
        otp,
        email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      Status: "INVALID",
      message: "Error Occured in setOTPVerficationEmail",
    });
  }
};
const updatePassword = async (req, res) => {
  let { userId, password, otp } = req.body;
  if (!userId || !otp || !password) {
    return res
      .status(400)
      .json({ Status: "INVALID", message: "Pls Enter the given details" });
  } else {
    const userOTPVerficationRecords = await userPasswordVerfication.find({
      userId,
    });
    if (userOTPVerficationRecords.length < 0) {
      return res
        .status(400)
        .json({ Status: "INVALID", message: "Register with your Email id" });
    } else {
      const { expiresAt } = userOTPVerficationRecords[0];
      const { hashedOTP } = userOTPVerficationRecords[0];
      if (expiresAt < Date.now()) {
        await userPasswordVerfication.deleteMany({ userId });
        res
          .status(400)
          .json({ Status: "INVALID", message: "OTP has been expired" });
      } else {
        const validOTP = await bcrypt.compare(otp, hashedOTP);
        if (!validOTP) {
          res.status(400).json({ Status: "INVALID", message: "Invalid OTP" });
        } else {
          const saltROunds = 10;
          const hashedPassword = await bcrypt.hash(password, saltROunds);
          await User.updateOne({ _id: userId }, { password: hashedPassword });
          await userPasswordVerfication.deleteMany({ userId });
          res.status(200).json({
            Status: "SUCCESS",
            message: "Password Changed",
          });
        }
      }
    }
  }
};

module.exports = {
  verifcationUser,
  registerUser,
  verfiyOtp,
  loginUser,
  forgetPasswordUser,
  updatePassword,
};
