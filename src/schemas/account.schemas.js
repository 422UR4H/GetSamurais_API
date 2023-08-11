import Joi from "joi";
import { userSchema } from "./user.schemas.js";
import { addressSchema } from "./address.schemas.js";
import { phoneSchema } from "./phone.schemas.js";

export const accountSchema = Joi.object({
    user: userSchema,
    address: addressSchema,
    phone: phoneSchema
});