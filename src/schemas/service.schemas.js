import Joi from "joi";

export const serviceSchema = Joi.object({
    mainPhoto: Joi.string().uuid({ version: ['uuidv4'] }).max(255),
    serviceName: Joi.string().alphanum().max(32).required(),
    serviceDescription: Joi.string().alphanum().max(255).required(),
    price: Joi.number().integer().greater(0).required(),
    paymentDescription: Joi.string().alphanum().max(255),
    isActive: Joi.boolean()
});