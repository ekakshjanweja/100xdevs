import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://jekaksh:Vwv5gQJD2uBG@ep-green-star-a58gc0am-pooler.us-east-2.aws.neon.tech/test?sslmode=require",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

async function createAddressesTable() {
  await client.connect();
  const result = await client.query(`
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
}

async function insertData(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();

    await client.query("BEGIN");

    const insertUserText = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id;
    `;
    const values = [username, email, password];
    const userRes = await client.query(insertUserText, values);
    const userId = userRes.rows[0].id;

    const insertAddressText = `
    INSERT INTO ADDRESSES (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5);
    `;

    const addressValues = [userId, city, country, street, pincode];
    await client.query(insertAddressText, addressValues);

    await client.query("COMMIT");

    console.log("Data inserted successfully");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error during the insertion:", error);
    throw error;
  } finally {
    await client.end();
  }
}

async function getUser(email: string) {
  try {
    await client.connect();
    const query = `
    SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1
`;
    const values = [email];
    const res = await client.query(query, values);

    if (res.rows.length > 0) {
      console.log("User found: ", res.rows[0]);
      return res.rows[0];
    } else {
      console.log("No user found with the given email.");
      return null;
    }
  } catch (error) {
    console.error("Error during fetching user:", error);
    throw error;
  } finally {
    await client.end();
  }
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
