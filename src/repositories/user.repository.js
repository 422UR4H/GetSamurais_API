import { clientDB } from "../database/db.connection.js";

export function createUserDB(name, nick, email, password, birthday) {
    return clientDB.query(
        `INSERT INTO users (name, nick, email, password, birthday)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;`,
        [name, nick, email, password, birthday]);
}

export function createAddressDB(userId, address) {
    const { cep, city, street, lotNumber, complement, neighborhood, federalUnit } = address;

    return clientDB.query(
        `INSERT INTO addresses
            ("userId", cep, city, street, "lotNumber", complement, neighborhood, "federalUnit")
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8);`,
        [userId, cep, city, street, lotNumber, complement, neighborhood, federalUnit]
    );
}

export function createPhoneDB(userId, phoneNumber) {
    return clientDB.query(
        `INSERT INTO phones ("userId", "phoneNumber")
        VALUES ($1, $2);`,
        [userId, phoneNumber]
    );
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