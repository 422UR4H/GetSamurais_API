import {
    createServiceDB,
    getServiceByIdDB,
    getServicesRankDB,
    getServicesByUserDB,
    getServicesByCategoryDB,
    updateServiceStatusDB,
    updateServiceDB,
    deleteServiceDB
} from "../repository/service.repository.js";


export async function createService(req, res) {
    // const { services, categories } = req.body;
    const service = req.body;
    const { user } = res.locals;
    try {
        // const result = await createServiceDB(services, categories, user.id);
        const result = await createServiceDB(service, user.id);
        if (result.rowCount === 0) {
            return res.status(409).send({
                message: "Não foi possível criar este serviço neste momento!"
            });
        }
        const { id } = result.rows[0];
        res.status(201).send({ id });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getServiceById(req, res) {
    const { id } = req.params;
    try {
        const result = await getServiceByIdDB(id);
        if (result.rowCount === 0) {
            return res.status(404).send("Este serviço não existe!");
        }
        res.send({ service: result.rows[0] });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getServicesRank(req, res) {
    const { limit = 0 } = req.query;
    try {
        const result = await getServicesRankDB(limit);
        res.send({ servicesRank: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getServicesByUser(req, res) {
    const { id } = req.params;
    try {
        const result = await getServicesByUserDB(id);
        if (result.rowCount === 0) {
            return res.status(404).send("Este serviço não existe!");
        }
        res.send({ service: result.rows });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getServicesByCategory(req, res) {
    const { category } = req.params;
    try {
        const result = await getServicesByCategoryDB(category);
        if (result.rowCount === 0) {
            return res.status(404).send("Este serviço não existe!");
        }
        res.send({ service: result.rows[0] });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updateServiceStatus(req, res) {
    const { user, status } = res.locals;
    const { id } = req.params;
    try {
        const result = await updateServiceStatusDB(status, id, user.id);

        if (result.rowCount === 0) {
            if ((await getServiceByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este serviço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function updateService(req, res) {
    const { service } = req.body;
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await updateServiceDB(service, id, user.id);

        if (result.rowCount === 0) {
            if ((await getServiceByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este serviço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function deleteService(req, res) {
    const { user } = res.locals;
    const { id } = req.params;
    try {
        const result = await deleteServiceDB(id, user.id);

        if (result.rowCount === 0) {
            if ((await getServiceByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este serviço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }
        res.sendStatus(204);
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}