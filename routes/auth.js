const { Router } = require("express");
const { getLogin } = require("../controllers");

const router = Router();

router
  .get("/login", getLogin)
  .post("/login", (req, res, next) => {})
  .get("/register", (req, res, next) => {})
  .post("/register", (req, res, next) => {});

module.exports = router;
