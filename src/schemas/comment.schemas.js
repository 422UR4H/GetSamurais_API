import Joi from "joi";

export const commentSchema = Joi.object({
    comment: Joi.string().alphanum().max(255).required()
});