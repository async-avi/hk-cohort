import { client } from ".";

async function getTodosRelatedToUsers(user_id: number) {
  await client.connect();
  try {
    const query = "SELECT * FROM todos WHERE user_id = $1";
    const resp = await client.query(query, [user_id]);
    console.log(resp.rows);
  } catch (error) {
    console.log(error);
  }
}
getTodosRelatedToUsers(1);
