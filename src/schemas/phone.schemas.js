import Joi from "joi";

export const phoneSchema = Joi.object({
    phoneNumber: Joi.string().pattern(/^[0-9]+$/).min(10).max(11).required()
});