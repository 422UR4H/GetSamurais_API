import { clientDB } from "../database/db.connection.js";

export function createPhoneDB(userId, phoneNumber) {
    return clientDB.query(
        `INSERT INTO phones ("userId", "phoneNumber")
        VALUES ($1, $2);`,
        [userId, phoneNumber]
    );
}