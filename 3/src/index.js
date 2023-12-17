import express from "express";
import mongoose from "mongoose";
import User from "./models/User/userModel.js";
import dotenv from "dotenv";
import { registerRoutes } from "./routes/registerRoutes.js";

const app = express();
let port = 3000;
dotenv.config();

let mongoConnectionUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority`;

app.use(express.json());

registerRoutes(app);
app.listen(port, async () => {
  try {
    await mongoose.connect(mongoConnectionUrl, { dbName: "test" });

    let users = await User.find();
    console.log(users);
    //console.log(process.env);
    console.log("App started on port " + port);
  } catch (error) {
    console.error(error);
  }
});
