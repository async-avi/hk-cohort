import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello from Home");
});

app.post("/info", async (c) => {
  const request = await c.req.json();
  console.log(request);
  console.log(c.req.query("id"));
  return c.text("Got it");
});

export default app;
