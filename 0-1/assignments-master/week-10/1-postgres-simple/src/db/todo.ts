import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const query =
      "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
    const resp = await client.query(query, [userId, title, description]);
    const respObject = resp.rows[0];
    console.log({
      title: respObject.title,
      description: respObject.description,
      done: respObject.done,
      id: respObject.id,
    });
  } catch (error) {
    console.log(error);
  }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const query = "UPDATE todos SET done = true WHERE id = $1 RETURNING *";
    const resp = await client.query(query, [todoId]);
    console.log({
      title: resp.rows[0].title,
      description: resp.rows[0].description,
      done: resp.rows[0].done,
      id: resp.rows[0].id,
    });
  } catch (error) {
    console.log(error);
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {}
