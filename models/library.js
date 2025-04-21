const query = require("../db")

async function getAllCategories() {
    const { rows } = await query("SELECT book_category, slug FROM book_categories;")
    return rows
}

async function getBooksOfCategory(category_slug) {
    const { rows } = await query(
        "SELECT * from books inner join book_categories on books.category_id=book_categories.category_id where book_categories.slug=$1;",
        [category_slug],
    )
    return rows
}

async function categoryExists(category_slug) {
    const { rows } = await query("SELECT EXISTS (SELECT 1 FROM book_categories where slug=$1);", [category_slug])
    return rows[0].exists
}

module.exports = {
    categoryExists,
    getAllCategories,
    getBooksOfCategory,
}
