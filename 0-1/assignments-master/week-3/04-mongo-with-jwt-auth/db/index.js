const mongoose = require("mongoose");

const DB_Name = "pewdemyAdvanced";
// Connect to MongoDB
async function connectDB() {
  try {
    let connectionInstance = await mongoose.connect(
      `mongodb+srv://avi:notsoweak123@learning.jg5tycr.mongodb.net/${DB_Name}`
    );
    console.log(
      `DB connection established: ${connectionInstance.connection.db.databaseName}`
    );
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
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
