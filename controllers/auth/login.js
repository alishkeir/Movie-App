const logger = require("../../configuration/logger");

module.exports.getLogin = (req, res, next) => {
  logger.info("Login");
  res.send("Welcome to login page");
};
