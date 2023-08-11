import { clientDB } from "../database/db.connection.js";

export function createCommentDB(comment, feedbackId, userId) {
    return clientDB.query(
        `INSERT INTO comments (comment, "feedbackId", "userId")
        VALUES ($1, $3, $2);`,
        [comment, feedbackId, userId]
    );
}

export function getCommentsByUserDB(userId) {
    return clientDB.query(
        `SELECT * FROM comments
        WHERE "userId" = $1;`,
        [userId]
    );
}

export function getFeedbacksByServiceDB(feedbackId) {
    return clientDB.query(
        `SELECT * FROM comments
        WHERE "feedbackId" = $1;`,
        [feedbackId]
    );
}

export function updateCommentDB(commentId, userId, feedbackId, comment) {
    return clientDB.query(
        `UPDATE comments
        SET feedbackId = $3, comment = $4
        WHERE id = $1 AND "userId" = $2;`,
        [commentId, userId, feedbackId, comment]
    );
}

export function deleteCommentDB(id, userId) {
    return clientDB.query(
        `DELETE FROM comments
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}