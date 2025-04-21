const { Router } = require("express")
const categoryController = require("../controllers/categoryController.js")

const categoryRouter = Router()

categoryRouter.get("/:category", categoryController.getCategory)

module.exports = categoryRouter
