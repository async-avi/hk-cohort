import { client } from ".";

async function updateTodoToTrue(user_id: number) {
  await client.connect();
  try {
    const query = "UPDATE todos SET done = true WHERE user_id = $1";
    const resp = await client.query(query, [user_id]);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

updateTodoToTrue(1);
