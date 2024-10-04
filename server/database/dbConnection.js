const mongoose = require("mongoose");

const chalkPromise = import("chalk");

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION);

    chalkPromise
      .then((module) => {
        const chalk = module.default;
        const chocolate = chalk.hex("#c66b27");
        const almond = chalk.hex("#efdecd");
        console.log(
          chocolate(chalk.bold("CONNECTION:"), almond(chalk.bold("COnnected")))
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
