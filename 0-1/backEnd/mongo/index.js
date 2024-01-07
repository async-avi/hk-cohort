import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const mongoURL = "mongodb+srv://avi:avi123@test.z7qnf9x.mongodb.net/";

app.use(express.json());

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

function userExists(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email: email }).then((userFound) => {
    console.log(userFound.length);
  });
}

const User = mongoose.model("User", userSchema);

const connectDB = async () => {
  let connectionInstance = await mongoose.connect(mongoURL);
  console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
};

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Please follow the following instructions",
    signUp: "Post route to sign up",
    signIn: "Get route to sign in and see the content",
  });
});

app.post("/signUp", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    email,
    password,
  });
  newUser.save().then(() =>
    res.json({
      msg: "User successfully registered",
    })
  );
});

app.use(userExists);

app.post("/signIn", (req, res) => {
  res.status(202);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Something went wrong with our server",
  });
});

app.listen(port, () => {
  connectDB();
  console.log("Server listening on port 3000");
});
