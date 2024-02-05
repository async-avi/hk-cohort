import { Client } from "pg";

export const client = new Client({
  connectionString:
    "postgres://ugwkqpmg:eUm5VHOXRVjDCiFFzJHrZhZ86y_djX-r@rain.db.elephantsql.com/ugwkqpmg",
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(
    `
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
  `
  );
  console.log(result);
}

async function createTodoTable() {
  await client.connect();
  const result = await client.query(`
      CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
      );
    `);
  console.log(result);
}
