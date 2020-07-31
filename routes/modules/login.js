const express = require('express')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const checkUser = require("./checkUser")
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(cookieParser())

router.get("/", (req, res) => {
  if (req.cookies.SID) {
    const result = req.cookies.SID;
    res.render("welcome", { firstName: result.firstName, email: result.email });
  } else {
    res.render("index");
  }
})

router.post("/", (req, res) => {
  const result = checkUser(req.body.email, req.body.password);
  switch (result) {
    case "msgNull":
      res.render("index", { msg: "Username/Password 不可空白" });
      break;
    case "msgFalse":
      res.render("index", { msg: "Username/Password 錯誤" });
      break;
    default:
      res.render("welcome", {
        firstName: result.firstName,
        email: result.email,
      });
      res.cookie("SID", { firstName: result.firstName, email: result.email });
  }
})

module.exports = router
