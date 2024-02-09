import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    const query =
      "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *";
    const resp = await client.query(query, [username, password, name]);
    return resp.rows[0];
  } catch (error) {
    console.log(error);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const resp = await client.query(query, [userId]);
    return resp.rows[0];
  } catch (error) {
    console.log(error);
  }
}
