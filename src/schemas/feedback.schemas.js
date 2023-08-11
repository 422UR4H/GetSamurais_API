import Joi from "joi";

export const feedbackSchema = Joi.object({
    serviceId: Joi.string().uuid({ version: ['uuidv4'] }).max(255).required(),
    feedback: Joi.string().max(255),
    stars: Joi.number().integer().min(1).max(5).required()
});