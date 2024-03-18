import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Working",
  });
});

app.listen(3000, () => console.log("running on port 3000"));
