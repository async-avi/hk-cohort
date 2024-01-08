const mongoose = require("mongoose");
const MongoURL =
  "mongodb+srv://avi:Notsoweak1323@assignmentmongo.w0nadub.mongodb.net";

// Connect to MongoDB
function connectDB() {
  try {
    let connectionInstance = mongoose.connect(MongoURL);
    connectionInstance.then((data) => console.log(data.connection.host));
  } catch (error) {
    console.log(error);
  }
}

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  email: String,
  password: String,
  courses: [],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  email: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: String,
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
