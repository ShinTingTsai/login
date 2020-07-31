const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser())

// logout
router.post("/", (req, res) => {
  res.clearCookie("SID");
  return res.redirect("/");
});

module.exports = router
