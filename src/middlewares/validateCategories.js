import { getCategoryByNameDB } from "../repositories/category.repository.js";

export default async function validateCategories(req, res, next) {
    const { category } = req.body.categories;
    const result = await getCategoryByNameDB(category);
    if (result.rowCount === 0) {
        return res.status(404).send({ message: "Esta categoria não existe!" });
    }
    console.log(result.rows[0].id)
    res.locals.categoryId = result.rows[0].id;
    next();
}