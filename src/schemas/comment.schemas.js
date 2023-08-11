import Joi from "joi";

export const commentSchema = Joi.object({
    feedbackId: Joi.string().uuid({ version: ['uuidv4'] }).max(255).required(),
    comment: Joi.string().max(255).required()
});