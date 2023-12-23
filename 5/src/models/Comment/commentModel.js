import mongoose from "mongoose";
import { commentSchema } from "./commentSchema";

export const Comment = mongoose.model("Comment", commentSchema, "comments");
