const express = require("express");
const app = express();
const chalkPromise = import("chalk");
const cors = require("cors");
//DOT ENV
require("dotenv").config();
app.use(cors());
//DATABASE CONNECTION
const dbConnection = require("./database/dbConnection");
dbConnection();

//REQUIRED
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//PORT
const port = process.env.PORT || 3000;

//ROUTER
app.use("/", require("./Routes/userRoutes")); // Handle /api routes first
// app.use("/api", (req, res) => {
//   res.status(200).json({ Status: "SUCCESS", message: "welcome" });
// }); // Handle /api routes first

//ERROR HANDLER
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 400;
  next(error);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

chalkPromise
  .then((module) => {
    const chalk = module.default;
    const aquaBlue = chalk.hex("#00FFFF");

    app.listen(port, () =>
      console.log(
        aquaBlue(
          `THE SERVER IS RUNNING ON: ${chalk.hex("#FFC0CB").bold(port)} !`
        )
      )
    );
  })
  .catch((error) => {
    console.error("Error loading chalk:", error);
  });
