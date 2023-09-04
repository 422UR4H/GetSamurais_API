import {
    createServiceDB,
    getServiceByIdDB,
    getServicesRankDB,
    getServicesByUserDB,
    getServicesByCategoryDB,
    updateServiceStatusDB,
    updateServiceDB,
    deleteServiceDB,
    createServiceCategoryDB,
    getAllServicesDB,
    getServicesCountDB,
    updateServiceCategoryDB,
    getServiceAllInfoDB
} from "../repositories/service.repository.js";


export async function createService(req, res) {
    const { service } = req.body;
    const { user } = res.locals;
    try {
        const mainPhoto = await req.file;
        const mainPhotoData = await mainPhoto.toJSON();
        console.log(mainPhotoData)
        return res.status(501).send(mainPhotoData);
        const serviceResult = (await createServiceDB(service, user.id)).rows[0];
        if (!serviceResult) {
            return res.status(409).send({
                message: "Não foi possível criar este serviço neste momento!"
            });
        }

        const { categoryId } = res.locals;
        if ((await createServiceCategoryDB(serviceResult.id, categoryId)).rowCount === 0) {
            return res.status(207).send({
                service: serviceResult,
                message: "Não foi possível associar esta categoria ao serviço no momento!"
            });
        }

        serviceResult.category = req.body.categories.category;
        res.status(201).send({ service: serviceResult });
    } catch ({ message }) {
        res.status(500).send({ message });
    }
}

export async function getAllServices(req, res) {
    try {
        const result = await getAllServicesDB();
        res.send({ services: result.rows });
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

export async function getServicesAllInfo(req, res) {
    const { id } = req.params;
    try {
        const service = (await getServiceAllInfoDB(id)).rows[0];
        if (!service) {
            return res.status(404).send("Este serviço não existe!");
        }
        res.send({ service });
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
    const { id } = res.locals.user;
    try {
        const result = await getServicesByUserDB(id);
        if (result.rowCount === 0) {
            return res.status(404).send("Este serviço não existe!");
        }
        res.send({ services: result.rows });
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

export async function getServicesCount(req, res) {
    try {
        const result = await getServicesCountDB();
        res.send(result.rows[0]);
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
        const serviceResult = (await updateServiceDB(service, id, user.id)).rows[0];
        if (!serviceResult) {
            if ((await getServiceByIdDB(id)).rowCount === 0) {
                return res.status(404).send("Este serviço não existe!");
            } else {
                return res.status(401).send("Acesso negado!");
            }
        }

        const { categoryId } = res.locals;
        if ((await updateServiceCategoryDB(serviceResult.id, categoryId)).rowCount === 0) {
            return res.status(207).send({
                service: serviceResult,
                message: "Não foi possível associar esta categoria ao serviço no momento!"
            });
        }
        serviceResult.category = req.body.categories.category;
        res.send({ service: serviceResult });
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