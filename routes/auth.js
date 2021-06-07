const { Router } = require("express");

const router = Router();

router
  .get("/login", (req, res, next) => {
    res.send("Welcome to login page");
  })
  .post("/login", (req, res, next) => {})
  .get("/register", (req, res, next) => {})
  .post("/register", (req, res, next) => {});

module.exports = router;
