const query = require("../db")

async function getAllCategories() {
    const { rows } = await query("SELECT * FROM book_categories;")
    return rows
}

module.exports = {
    getAllCategories,
}
