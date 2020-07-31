const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(router)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})