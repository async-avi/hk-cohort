import { client } from ".";

async function addUser(email: string, password: string) {
  await client.connect();
  const values = [email, password];
  try {
    const query =
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id";
    const resp = await client.query(query, values);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(title: string, description: string, user_id: number) {
  await client.connect();
  const values = [title, description, user_id];
  try {
    const query =
      "INSERT INTO todos (title, description, user_id) VALUES ($1, $2, $3) RETURNING id";
    const resp = await client.query(query, values);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

addTodo("Go gym", "Go to gym", 1);
