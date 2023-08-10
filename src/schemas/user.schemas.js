import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(3).max(64).required(),
    nick: Joi.string().min(3).max(16).required(),
    email: Joi.string().email().max(64).required(),
    password: Joi.string().min(3).max(255).required()
});