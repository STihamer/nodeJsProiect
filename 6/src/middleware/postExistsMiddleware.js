import { ObjectId } from "mongodb";
import { Post } from "../models/Post/postModel.js";
import { responseError } from "../utils/responseFormatting.js";

export const postExists = async (req, res, next) => {
  const id = req.params.id;
  if (id == null) {
    throw new Error("Route does not have ID parameter");
  }

  const postCount = await Post.find({ _id: new ObjectId(id) }).count();

  if (postCount < 1) {
    responseError(res, "Not found", null, 404);
    return;
  }
  next();
};
