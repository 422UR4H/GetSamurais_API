import { clientDB } from "../database/db.connection.js";

export function createServiceDB(service, userId) {
    const { name, serviceDescription, price, paymentDescription, status, mainPhoto } = service;
    return clientDB.query(
        `INSERT INTO services
            ("userId", service, "serviceDescription", price, "paymentDescription", status, "mainPhoto")
        VALUES
            ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;`,
        [userId, name, serviceDescription, price, paymentDescription, status, mainPhoto]
    );
}

export function createServiceCategoryDB(serviceId, categoryId) {
    return clientDB.query(
        `INSERT INTO "servicesCategories"
            ("serviceId", "categoryId")
        VALUES
            ($1, $2)
        RETURNING *;`,
        [serviceId, categoryId]
    );
}

export function getServiceByIdDB(id) {
    return clientDB.query(
        `SELECT * FROM services
        WHERE id = $1;`,
        [id]
    );
}

export function getServicesRankDB(limit) {
    return clientDB.query(
        `SELECT * FROM services
        LIMIT $1;`,
        [limit]
    );
}

export function getServicesByUserDB(id) {
    return clientDB.query(
        `SELECT * FROM services
        WHERE id = $1;`,
        [id]
    );
}

export function getServicesByCategoryDB(category) {
    return clientDB.query(
        `SELECT * FROM services
        WHERE category = $1;`,
        [category]
    );
}

export function updateServiceStatusDB(status, id, userId) {
    return clientDB.query(
        `UPDATE services
        SET status = $1
        WHERE id = $2 AND "userId" = $3;`,
        [status, id, userId]
    );
}

export function updateServiceDB(service, id, userId) {
    // const { service } = service;
    return clientDB.query(
        `UPDATE services
        SET service = $3
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId, service]
    );
}

export function deleteServiceDB(id, userId) {
    return clientDB.query(
        `DELETE FROM services
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}