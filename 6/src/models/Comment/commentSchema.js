import mongoose from "mongoose";
import { ObjectId } from "mongodb";
export const commentSchema = mongoose.Schema({
  user_id: {
    type: ObjectId,
    required: true,
  },
  post_id: {
    type: ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: [true, "post must have same content"],
    minLength: [3, "Comment content must have at least 3 characters"],
    maxLength: [500, "Comment content cannot have more than 500characters"],
  },
});
