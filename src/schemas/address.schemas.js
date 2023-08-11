import Joi from "joi";

export const addressSchema = Joi.object({
    cep: Joi.string().pattern(/^[0-9]+$/).length(8).required(),
    city: Joi.string().min(3).max(32).required(),
    street: Joi.string().max(32).required(),
    lotNumber: Joi.number().integer().greater(0),
    complement: Joi.string().max(255),
    neighborhood: Joi.string().max(32).required(),
    federalUnit: Joi.string().min(2).max(32).required()
});