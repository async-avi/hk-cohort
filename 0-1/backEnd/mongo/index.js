import express from "express";
import mongoose, { Schema } from "mongoose";

const app = express();
const MongoURL =
  "mongodb+srv://avi:Notsoweak1323@assignmentmongo.w0nadub.mongodb.net";
const DB_Name = "basicMongo";

app.use(express.json());

function connectDB() {
  let connectionInstance = mongoose.connect(`${MongoURL}/${DB_Name}`);
  connectionInstance.then((data) => console.log(data.connection.host));
}

const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

app.post("/signUp", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let user = await User.find({ email: email });
  if (user.length == 0) {
    let newUser = await new User({
      email,
      password,
    });
    newUser.save().then(() =>
      res.status(202).json({
        msg: "User successfully created",
      })
    );
  } else {
    res.json({
      msg: "User already exists",
    });
  }
});

app.post("/signIn", async (req, res) => {
  let email = req.body.email;
  let user = await User.find({ email: email });
  if (user.length > 0) {
    res.status(200).json({
      msg: "I drink till I'm drunk, smoke till I high",
    });
  } else {
    res.status(403).json({
      msg: "Restricted access",
    });
  }
});

app.get(`/`, (req, res) => {
  res.json({
    msg: "Follow the instructions",
    signIn: "To sign in and see Content",
    signUp: "To register yourself",
  });
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
  connectDB();
});
