const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3001

app.use(cors({ origin: "*" }))

app.get("/", (req, res) => {
  res.json("Hey there, nerd!")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
