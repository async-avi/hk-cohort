import express from "express";
import jwt from "jsonwebtoken";

const app = express();
let jwtPassword = 1234567;

app.use(express.json());

const ALL_USERS = [
  {
    email: "avi123@gmail.com",
    password: "123",
    username: "Abhinav",
  },
  {
    email: "tina2988@gmail.com",
    password: "12345",
    username: "Tina",
  },
];

function userExists(email, password) {
  let exists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].email == email && ALL_USERS[i].password == password) {
      exists = true;
    }
  }
  return exists;
}

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExists(email, password)) {
    res.status(403).json({
      msg: "User does not exist in our DB",
    });
  }
  let token = jwt.sign({ email: email }, password);
  res.json({
    token,
  });
});

app.get("/users", async (req, res) => {});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Something wrong is with our server",
  });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
