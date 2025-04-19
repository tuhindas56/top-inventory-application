require("dotenv").config()

const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080

const homeRouter = require("./routes/homeRouter.js")
const { handle404, handleError } = require("./controllers/handleErrors.js")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/", homeRouter)

app.use(handle404)
app.use(handleError)

app.listen(PORT, () => console.log(`[Server] listening on port ${PORT}`))
