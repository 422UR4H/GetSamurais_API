import { getUserByEmailDB, getUserByNickDB, getUsersCountDB } from "../repositories/user.repository.js";

export async function getUserByNick(req, res) {
    try {
        const result = await getUserByNickDB(req.params.nick);
        if (result.rowCount === 0) return res.sendStatus(200);
        res.sendStatus(409);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getUserByEmail(req, res) {
    try {
        const result = await getUserByEmailDB(req.params.email);
        if (result.rowCount === 0) return res.sendStatus(200);
        res.sendStatus(409);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getUsersCount(req, res) {
    try {
        const result = await getUsersCountDB();
        res.send(result.rows[0]);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}