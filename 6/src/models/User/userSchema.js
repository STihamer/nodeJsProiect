import mongoose from "mongoose";
import { ObjectId } from "mongodb";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    minLength: [2, "The name is too short"],
    maxLength: [200, "The name is too short"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
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

  settings_id: {
    type: ObjectId,
    required: true,
  },
});

export default userSchema;
