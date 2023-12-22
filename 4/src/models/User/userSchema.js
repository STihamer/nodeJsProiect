import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    minLength: [2, "The name is too short"],
    maxLength: [200, "The name is too short"],
    trim: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
    minLength: [5, "The email is too short"],
    maxLength: [200, "The email is too long"],
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "the password is required"],
    minLength: [
      8,
      "The password is too short, must have at least 8 characters",
    ],
    maxLength: [200, "The password is too long"],
  },
});

export default userSchema;
