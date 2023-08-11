import { clientDB } from "../database/db.connection.js";

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

export function getAddressesByUserDB(userId) {
    return clientDB.query(
        `SELECT * FROM addresses
        WHERE "userId" = $1;`,
        [userId]
    );
}

export function updateAddressDB(address, id, userId) {
    const { cep, city, street, lotNumber, complement, neighborhood, federalUnit } = address;
    return clientDB.query(
        `UPDATE addresses
        SET cep = $3, city = $4, street = $5, "lotNumber" = $6, complement = $7, neighborhood = $8, "federalUnit" = $9
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId, cep, city, street, lotNumber, complement, neighborhood, federalUnit]
    );
}

export function deleteAddressDB(id, userId) {
    return clientDB.query(
        `DELETE FROM addresses
        WHERE id = $1 AND "userId" = $2;`,
        [id, userId]
    );
}