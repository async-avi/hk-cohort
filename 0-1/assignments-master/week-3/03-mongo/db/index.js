const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://avi:notsoweak123@assignmentmongo.w0nadub.mongodb.net";
// Connect to MongoDB
function connectDB() {
  let connectionInstance = mongoose.connect(`${mongoURL}/pewdemy`);
  connectionInstance.then((data) => console.log(data.connection.host));
}

// Define schemas
const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: String,
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Admins" },
});

const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  courses: [CourseSchema],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchased: [CourseSchema],
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
