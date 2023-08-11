import { clientDB } from "../database/db.connection.js";

export function createFeedbackDB(feedback, stars, userId, serviceId) {
    return clientDB.query(
        `INSERT INTO services (feedback, stars, "userId", "serviceId")
        VALUES ($1, $2, $3, $4);`,
        [feedback, stars, userId, serviceId]
    );
}

export function getFeedbackByIdDB(id) {
    return clientDB.query(
        `SELECT * FROM feedbacks
        WHERE id = $1;`,
        [id]
    );
}

export function getFeedbacksByServiceDB(serviceId) {
    return clientDB.query(
        `SELECT * FROM feedbacks
        WHERE "serviceId" = $1;`,
        [serviceId]
    );
}

export function getFeedbacksByUserDB(userId) {
    return clientDB.query(
        `SELECT * FROM feedbacks
        WHERE "userId" = $1;`,
        [userId]
    );
}

export function updateFeedbackDB(serviceId, feedback, stars, feedbackId, userId) {
    return clientDB.query(
        `UPDATE feedbacks
        SET "serviceId" = $3, feedback = $4, stars = $5
        WHERE id = $1 AND "userId" = $2;`,
        [feedbackId, userId, serviceId, feedback, stars]
    );
}

export function deleteFeedbackDB(id, userId) {
    return clientDB.query(
        `DELETE FROM feedbacks
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}