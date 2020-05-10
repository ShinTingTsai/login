const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser");
const checkUser = require("./checkUser")

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  const result = checkUser(req.body.email, req.body.password)
  switch (result) {
    case 'msgNull':
      res.render("index", { msg: "Username/Password 不可空白" });
      break;
    case 'msgFalse':
      res.render("index", { msg: "Username/Password 錯誤" });
      break;
    default:
      res.render("welcome", { firstName: result });
  }
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})




