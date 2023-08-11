import Joi from "joi";

export const categorySchema = Joi.object({
    category: Joi.string().alphanum().max(32).required()
});