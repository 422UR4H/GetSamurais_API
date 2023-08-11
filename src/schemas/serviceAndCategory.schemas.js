import Joi from "joi";
import { serviceSchema } from "./service.schemas.js";
import { categorySchema } from "./category.schemas.js";

export const serviceAndCategorySchema = Joi.object({
    service: serviceSchema,
    categories: categorySchema
})