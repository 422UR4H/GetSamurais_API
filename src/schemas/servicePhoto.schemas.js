import Joi from "joi";

export const servicePhotoSchema = Joi.object({
    url: Joi.string().uri(8).max(255).required()
});