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