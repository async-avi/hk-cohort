import { Client } from "pg";
import { DB_URL } from "./config";

export const client = new Client({
  connectionString: DB_URL,
});

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Connection failed"));
