import { clientDB } from "../database/db.connection.js";

export function createUserDB(name, nick, email, password, birthday) {
    return clientDB.query(
        `INSERT INTO users (name, nick, email, password, birthday)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;`,
        [name, nick, email, password, birthday]);
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
        WHERE id = $1;`,
        [id]
    );
}

export function getUserByNickDB(nick) {
    return clientDB.query(
        `SELECT 1 FROM users
        WHERE nick = $1`,
        [nick]
    );
}

export function getUsersCountDB() {
    return clientDB.query(
        `SELECT COUNT(id) AS "usersAmount" FROM users`,
    );
}