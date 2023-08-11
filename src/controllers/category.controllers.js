import { getCategoriesDB } from "../repositories/category.repository.js";

export async function getCategories(req, res) {
    try {
        const result = await getCategoriesDB();
        res.send({ categories: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}