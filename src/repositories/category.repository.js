import { clientDB } from "../database/db.connection.js";

export function getCategoriesDB() {
    return clientDB.query("SELECT * FROM categories");
}

export function getCategoryByNameDB(categoryName) {
    return clientDB.query(
        `SELECT id FROM categories WHERE category = $1`,
        [categoryName]
    );
}