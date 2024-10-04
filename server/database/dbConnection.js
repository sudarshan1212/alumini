const mongoose = require("mongoose");
// import chalk from "chalk";

const chalkPromise = import("chalk");

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
      // useCreateIndex: true
    });

    chalkPromise
      .then((module) => {
        const chalk = module.default;
        const chocolate = chalk.hex("#c66b27");
        const almond = chalk.hex("#efdecd");
        console.log(
          chocolate(
            chalk.bold("CONNECTION:"),
            almond(chalk.bold(mongoose.connection.host))
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    console.log("not connected");
  }
};
module.exports = dbConnection;
