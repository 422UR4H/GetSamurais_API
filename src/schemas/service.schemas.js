import Joi from "joi";

export const serviceSchema = Joi.object({
    mainPhoto: Joi.string().uuid({ version: ['uuidv4'] }).max(255),
    name: Joi.string().max(32).required(),
    serviceDescription: Joi.string().max(255).required(),
    price: Joi.number().integer().greater(0).required(),
    paymentDescription: Joi.string().max(255),
    status: Joi.boolean()
});