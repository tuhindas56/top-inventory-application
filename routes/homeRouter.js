const homeController = require("../controllers/homeController.js")
const { Router } = require("express")

const homeRouter = Router()

homeRouter.get("/", homeController.getHome)

module.exports = homeRouter
