import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgres://obzeglxg:rGq0NYtfYoEDpbtEtRSTQk759bL9OR5u@rain.db.elephantsql.com/obzeglxg",
});

async function createUserTable() {
  await client.connect();

  const result = await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
  console.log(result);
}

async function insertDataInUserTable(
  username: string,
  email: string,
  password: string
) {
  try {
    await client.connect();
    const query =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const VALUES = [username, email, password];
    const result = await client.query(query, VALUES);
    console.log(result);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.end();
  }
}

async function findEmail(email: string) {
  await client.connect();
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await client.query(query, [email]);
    console.log(result);
  } catch (error) {
    console.log("Error finding email:", error);
  }
}

findEmail("ramesh@gmail.com");
