import { clientDB } from "../database/db.connection.js";

export function createPhoneDB(userId, phoneNumber) {
    return clientDB.query(
        `INSERT INTO phones ("userId", "phoneNumber")
        VALUES ($1, $2)
        ON CONFLICT ("phoneNumber") DO NOTHING
        RETURNING *;`,
        [userId, phoneNumber]
    );
}

export function getPhonesByUserDB(userId) {
    return clientDB.query(
        `SELECT * FROM phones
        WHERE "userId" = $1;`,
        [userId]
    );
}

export function updatePhoneDB(phoneNumber, id, userId) {
    return clientDB.query(
        `UPDATE phones
        SET "phoneNumber" = $1
        WHERE id = $2 AND "userId" = $3;`,
        [phoneNumber, id, userId]
    );
}

export function deletePhoneDB(id, userId) {
    return clientDB.query(
        `DELETE FROM phones
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}