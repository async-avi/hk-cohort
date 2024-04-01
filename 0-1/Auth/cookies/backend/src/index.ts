import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";

const jwtSecret = "you-fool";
let count = 0;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5717",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({ id: count++, username: username }, jwtSecret);
  res.cookie("token", token);
  res.json({
    msg: "User registered",
  });
});

app.get("/user", (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.decode(token) as JwtPayload;
  res.json({
    id: decoded.id,
    username: decoded.username,
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({
    msg: "Logged out",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
