import express from "express";

const app = express();

app.get(`/`, (req, res) => {
  res.send("Hello, world!");
});

app.get(`/health`, (req, res) => {
  const kidneyId = req.query.id;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "avi" && password === "123") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.status(200).json({
        msg: "You have healthy kidneys",
      });
    }
  }
  res.status(401).json({
    msg: "Something went wrong with your inputs",
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
