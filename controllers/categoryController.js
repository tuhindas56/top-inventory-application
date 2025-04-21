const { param, validationResult, matchedData } = require("express-validator")
const { categoryExists, getBooksOfCategory } = require("../models/library.js")

const getCategory = [
    param("category")
        .toLowerCase()
        .trim()
        .escape()
        .matches(/^[a-z-]+$/i)
        .withMessage(
            "Category must only contain letters and dashes. For example: <code>/category/fiction</code> or <code>/category/non-fiction</code>",
        ),
    async function (req, res, next) {
        const validationErrors = validationResult(req)

        if (validationErrors.isEmpty()) {
            const { category } = matchedData(req)

            if (await categoryExists(category)) {
                const items = await getBooksOfCategory(category)
                res.render("category", { category, items: items.length > 0 ? items : undefined })
            } else {
                next("Category does not exist.")
            }
        } else {
            next(validationErrors.array())
        }
    },
]

module.exports = categoryController = {
    getCategory,
}
