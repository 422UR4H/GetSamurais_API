import Joi from "joi";

export const feedbackSchema = Joi.object({
    feedback: Joi.string().max(255),
    lotNumber: Joi.number().integer()
});