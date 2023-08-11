import Joi from "joi";

export const feedbackSchema = Joi.object({
    feedback: Joi.string().alphanum().max(255),
    stars: Joi.number().integer().min(1).max(5)
});