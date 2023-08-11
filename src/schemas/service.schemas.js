import Joi from "joi";
import { categorySchema } from "./category.schemas.js";

export const serviceSchema = Joi.object({
    mainPhoto: Joi.string().uuid({ version: ['uuidv4'] }).max(255),
    serviceName: Joi.string().max(32).required(),
    serviceDescription: Joi.string().max(255).required(),
    price: Joi.number().integer().greater(0).required(),
    paymentDescription: Joi.string().max(255),
    status: Joi.boolean(),
    categorySchema
});