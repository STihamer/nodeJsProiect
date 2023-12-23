import { ObjectId } from "mongodb";
import { UserSettings } from "../models/UserSettings/userSettingsModel.js";
import { responseSuccess } from "../utils/responseFormatting.js";

export const getUserSettings = async (req, res) => {
  const id = req.params.id;

  const result = await UserSettings.find({ user_id: new ObjectId(id) });
  responseSuccess(res, result[0], 200);
};
