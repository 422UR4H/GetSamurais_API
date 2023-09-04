import Joi from "joi";
import { serviceSchema } from "./service.schemas.js";
import { categorySchema } from "./category.schemas.js";
import { photoSchema } from "./photo.schemas.js";

export const serviceAndCategorySchema = Joi.object({
    service: serviceSchema,
    mainPhoto: photoSchema,
    categories: categorySchema
})