"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://jekaksh:Vwv5gQJD2uBG@ep-green-star-a58gc0am-pooler.us-east-2.aws.neon.tech/test?sslmode=require",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
function createAddressesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`);
        console.log(result);
    });
}
function insertData(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query("BEGIN");
            const insertUserText = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id;
    `;
            const values = [username, email, password];
            const userRes = yield client.query(insertUserText, values);
            const userId = userRes.rows[0].id;
            const insertAddressText = `
    INSERT INTO ADDRESSES (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5);
    `;
            const addressValues = [userId, city, country, street, pincode];
            yield client.query(insertAddressText, addressValues);
            yield client.query("COMMIT");
            console.log("Data inserted successfully");
        }
        catch (error) {
            yield client.query("ROLLBACK");
            console.error("Error during the insertion:", error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
    SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1
`;
            const values = [email];
            const res = yield client.query(query, values);
            if (res.rows.length > 0) {
                console.log("User found: ", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("No user found with the given email.");
                return null;
            }
        }
        catch (error) {
            console.error("Error during fetching user:", error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
// createUsersTable();
// insertData("test", "test@test.com", "test1234").catch(console.error);
// getUser("test@test.com").catch(console.error);
// createAddressesTable();
// insertAddressData("1", "New York", "USA", "Wall Street", "10005").catch(
//   console.error
// );
// insertData(
//   "test1",
//   "test1@test.com",
//   "test1234",
//   "New York",
//   "USA",
//   "Wall Street",
//   "10005"
// ).catch(console.error);
getUser("4").catch(console.error);
