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
    type: String,
    required: true,
    minLength: [5, "The email is too short"],
    maxLength: [200, "The email is too long"],
    lowercase: true,
    trim: true,
  },
});

export default userSchema;
