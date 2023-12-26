import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import User from "../User/userModel.js";
export const postSchema = mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      required: true,
    },

    title: {
      type: String,
      required: [true, "Post title is required"],
      minLength: [3, "Post title must have at least 3 characters"],
      maxLength: [200, "Post title cannot have more than 200 characters"],
    },

    content: {
      type: String,
      required: [true, "post must have same content"],
      minLength: [3, "Post content must have at least 3 characters"],
      maxLength: [10000, "Post content cannot have more than 10000 characters"],
    },
  },

  {
    methods: {
      getUser: async function () {
        let user = await mongoose.model("User").findById(this.user_id);
        return user;
      },
    },
  }
);
