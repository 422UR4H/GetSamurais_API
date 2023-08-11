import Joi from "joi";

export const categorySchema = Joi.object({
    category: Joi.string().max(32).required()
});