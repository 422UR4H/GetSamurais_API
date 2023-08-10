import { clientDB } from "../database/db.connection.js";

export function createUserDB(name, nick, email, password) {
    return clientDB.query(
        `INSERT INTO users (name, nick, email, password)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;`,
        [name, nick, email, password]);
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