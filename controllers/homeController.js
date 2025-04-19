const { getAllCategories } = require("../models/library.js")

async function getHome(req, res) {
    const categories = await getAllCategories()
    res.render("index", { categories })
}

module.exports = homeController = {
    getHome,
}
