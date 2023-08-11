import { clientDB } from "../database/db.connection.js";

export function getCategoriesDB() {
    return clientDB.query("SELECT * FROM categories");
}