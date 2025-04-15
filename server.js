require("dotenv").config()

const express = require("express")
const { handle404, handleError } = require("./controllers/handleErrors.js")

const PORT = process.env.PORT || 8080

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.use(handle404)
app.use(handleError)

app.listen(PORT, () => console.log(`[Server] listening on port ${PORT}`))
