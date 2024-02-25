import { z } from "zod";
import express from "express";

const app = express();

const userProfile = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type typeOfUserProfile = z.infer<typeof userProfile>;

app.put("/api/users/update", (req, res) => {
  const body: typeOfUserProfile = req.body;

  const { success } = userProfile.safeParse(body);

  if (success) {
    res.status(411).json({});
    return;
  }

  res.status(200).json({});
});
