import Joi from "joi";

export const servicePhotoSchema = Joi.object({
    url: Joi.string().uri().max(255).required()
});