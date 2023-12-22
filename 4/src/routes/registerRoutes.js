import {
  checkToken,
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  logInUser,
  updateUser,
} from "./userRoutes.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const registerRoutes = (app) => {
  //register all routes

  app.get("/users", authMiddleware, getAllUsers);
  app.get("/users/:id", getUserById);
  app.post("/users", createUser);
  app.patch("/users/:id", authMiddleware, updateUser);
  app.delete("/users/:id", deleteUser);
  app.post("/users/login", logInUser);
  app.post("/check-token", checkToken);
};
