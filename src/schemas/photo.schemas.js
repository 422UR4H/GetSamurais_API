import Joi from "joi";

export const photoSchema = Joi.object({
    mainPhoto: Joi.object({
        name: Joi.string(),
        type: Joi.string(),
        size: Joi.string()
    })
});