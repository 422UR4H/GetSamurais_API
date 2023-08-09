import { clientDB } from "../database/db.connection.js";

export function createUserDB(name, email, password) {
    return clientDB.query(
        `INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;`,
        [name, email, password]);
}

export function getUserByEmailDB(email) {
    return clientDB.query(
        `SELECT * FROM users
        WHERE email = $1;`,
        [email]
    );
}

export function getUserByIdDB(id) {
    return clientDB.query(
        `SELECT * FROM users
        WHERE users.id = $1;`,
        [id]
    );
}