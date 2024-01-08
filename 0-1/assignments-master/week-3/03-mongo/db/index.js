const mongoose = require("mongoose");
const MongoURL =
  "mongodb+srv://avi:avi123@assignmentmongo.w0nadub.mongodb.net/";

// Connect to MongoDB
mongoose.connect(MongoURL);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  email: String,
  password: String,
  courses: [CourseSchema],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: String,
  author: { type: Schema.Types.username, ref: "Users" },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
