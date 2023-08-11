import axios from "axios";
import {
    createAddressDB,
    getAddressesByUserDB,
    updateAddressDB,
    deleteAddressDB
} from "../repositories/address.repository.js";


export async function createAddress(req, res) {
    const { id } = res.locals.user;
    try {
        const result = await createAddressDB(req.body, id);
        if (result.rowCount === 0) {
            return res.status(409).send({
                message: "Não foi possível adicionar esse endereço no momento!"
            });
        }
        res.statusStatus(201);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getAddressesByUser(req, res) {
    const { id } = req.params;
    try {
        const result = await getAddressesByUserDB(id);
        res.send({ addresses: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updateAddress(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await updateAddressDB(req.body, id, user.id);

        if (result.rowCount === 0) {
            if ((await getAddressByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este endereço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function deleteAddress(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await deleteAddressDB(id, user.id);

        if (result.rowCount === 0) {
            if ((await getAddressByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este endereço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}


export async function getAddress(req, res) {
    const { cep } = req.params;
    axios.get(`http://viacep.com.br/ws/${cep}/json`)
        .then(({ data }) => res.send(data))
        .catch(({ message }) => res.status(500).send({ message }));
}