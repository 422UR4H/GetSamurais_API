import { createUserDB, getUserByEmailDB } from "../repositories/user.repository.js";
import { createAddressDB } from "../repositories/address.repository.js";
import { createPhoneDB } from "../repositories/phone.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();


export async function signUp(req, res) {
    const { user, address, phone } = req.body;
    const { phoneNumber } = phone;
    const { name, nick, email, birthday } = user;

    const password = bcrypt.hashSync(user.password, 10);

    try {
        const result = await createUserDB(name, nick, email, password, birthday);
        if (result.rowCount === 0) {
            return res.status(409).send({ message: "E-mail já cadastrado!" });
        }

        const userId = result.rows[0].id;
        await createAddressDB(userId, address);
        if ((await createPhoneDB(userId, phoneNumber)).rowCount === 0) {
            return res.status(207).send({
                status: "warning",
                message: "Número de telefone já cadastrado!"
            });
        }
        res.sendStatus(201);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    try {
        const result = await getUserByEmailDB(email);
        if (result.rowCount === 0) {
            return res.status(404).send({ message: "E-mail não cadastrado!" });
        }

        const user = result.rows[0];
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).send({ message: "Senha incorreta!" });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET || "test",
            { expiresIn: 24 * 60 * 60 }
        );
        res.send({ token });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}