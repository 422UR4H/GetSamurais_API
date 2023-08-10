import Joi from "joi";

export const serviceSchema = Joi.object({
    mainPhoto: Joi.string().uuid({ version: ['uuidv4'] }).max(255),
    serviceName: Joi.string().max(32).required(),
    serviceDescription: Joi.string().max(255).required(),
    price: Joi.number().integer().required(),
    paymentDescription: Joi.string().max(255),
    isActive: Joi.boolean()
});