import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(3).max(32).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(3).required()
});