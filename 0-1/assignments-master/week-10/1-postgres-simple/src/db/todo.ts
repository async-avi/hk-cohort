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

createTodo(1, "Go gym", "go to gym");
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
export async function updateTodo(todoId: number) {}

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
