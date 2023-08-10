import Joi from "joi";

export const phoneSchema = Joi.object({
    phoneNumber: Joi.string().min(10).max(11).required()
});