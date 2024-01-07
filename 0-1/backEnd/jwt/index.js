import express from "express";
import jwt from "jsonwebtoken";

const app = express();
let jwtPass = 1234567;

app.use(express.json());

const ALL_USERS = [
  {
    email: "avi123@.gmail.com",
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

app.post("/signIn", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExists(email, password)) {
    res.status(404).json({
      msg: "User does not exist",
    });
  }
  let token = jwt.sign({ email: email }, jwtPass);
  res.json({
    token,
  });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
