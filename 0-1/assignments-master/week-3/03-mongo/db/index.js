const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://avi:notsoweak123@assignmentmongo.w0nadub.mongodb.net";
// Connect to MongoDB
function connectDB() {
  let connectionInstance = mongoose.connect(`${mongoURL}/pewdemy`);
  connectionInstance.then((data) => console.log(data.connection.host));
}

// Define schemas

const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchased: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: String,
  publisher: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  connectDB,
};
