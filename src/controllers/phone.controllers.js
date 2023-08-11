import {
    createPhoneDB,
    getPhonesByUserDB,
    updatePhoneDB,
    deletePhoneDB
} from "../repositories/phone.repository.js";


export async function createPhone(req, res) {
    const { phoneNumber } = req.body;
    const { id } = res.locals.user;
    try {
        const result = await createPhoneDB(phoneNumber, id);
        if (result.rowCount === 0) {
            return res.status(409).send({ message: "Telefone já está cadastrado!" });
        }
        res.statusStatus(201);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getPhonesByUser(req, res) {
    const { id } = req.params;
    try {
        const result = await getPhonesByUserDB(id);
        res.send({ phones: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updatePhone(req, res) {
    const { phoneNumber } = req.body;
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await updatePhoneDB(phoneNumber, id, user.id);

        if (result.rowCount === 0) {
            if ((await getPhoneByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este telefone não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function deletePhone(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await deletePhoneDB(id, user.id);

        if (result.rowCount === 0) {
            if ((await getPhoneByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este telefone não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}