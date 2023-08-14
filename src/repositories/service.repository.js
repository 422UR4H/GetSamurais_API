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

export function updateServiceCategoryDB(serviceId, categoryId) {
    return clientDB.query(
        `UPDATE "servicesCategories"
        SET "categoryId" = $1
        WHERE "serviceId" = $2
        RETURNING *;`,
        [categoryId, serviceId]
    );
}

export function getAllServicesDB() { // feedbacks
    return clientDB.query(
        `SELECT s.*, c.category
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        WHERE s.status = true;`
    );
}

export function getServiceByIdDB(id) { // feedbacks comments "servicePhotos"
    return clientDB.query(
        `SELECT s.*, c.category
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        WHERE s.id = $1;`,
        [id]
    );
}

export function getServiceAllInfoDB(id) { // feedbacks comments "servicePhotos"
    return clientDB.query(
        `SELECT s.*, u.nick, u.name, u.email, c.category, p."phoneNumber"
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        JOIN users AS u ON s."userId" = u.id
        JOIN phones AS p ON p."userId" = u.id
        WHERE s.id = $1;`,
        [id]
    );
}

export function getServicesRankDB(limit) { // feedbacks "servicePhotos"
    return clientDB.query(
        `SELECT s.*, c.category
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        WHERE s.status = true
        LIMIT $1;`,
        [limit]
    );
}

export function getServicesByUserDB(id) { // feedbacks comments "servicePhotos"
    return clientDB.query(
        `SELECT s.*, c.category
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        JOIN users AS u ON s."userId" = u.id
        WHERE u.id = $1;`,
        [id]
    );
}

export function getServicesByCategoryDB(category) { // feedbacks comments "servicePhotos"
    return clientDB.query(
        `SELECT s.*, c.category
        FROM "servicesCategories" AS sc
        JOIN services AS s ON sc."serviceId" = s.id
        JOIN categories AS c ON sc."categoryId" = c.id
        WHERE c.category = $1 AND s.status = true;`,
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
    console.log(service)
    const { name, serviceDescription, price, paymentDescription, status, mainPhoto } = service;
    return clientDB.query(
        `UPDATE services
        SET service = $3, "serviceDescription" = $4, price = $5, "paymentDescription" = $6, status = $7, "mainPhoto" = $8
        WHERE id = $1 AND "userId" = $2
        RETURNING *;`,
        [id, userId, name, serviceDescription, price, paymentDescription, status, mainPhoto]
    );
}

export function deleteServiceDB(id, userId) {
    return clientDB.query(
        `DELETE FROM services
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}

export function getServicesCountDB() {
    return clientDB.query(
        `SELECT COUNT(id) AS "servicesAmount"
        FROM services
        WHERE status = true`,
    );
}