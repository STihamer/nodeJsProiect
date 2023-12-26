import { ObjectId } from "mongodb";
import { responseError } from "../utils/responseFormatting.js";
import mongoose from "mongoose";

export const modelExists = (modelName = "Post", urlParamName = "id") => {
  const model = mongoose.model(modelName);

  return async (req, res, next) => {
    const id = req.params[urlParamName];
    if (id == null) {
      throw new Error("Route does not have ID parameter");
    }

    const modelCount = await model.find({ _id: new ObjectId(id) }).count();

    if (modelCount < 1) {
      responseError(res, "Not found", null, 404);
      return;
    }
    next();
  };
};
