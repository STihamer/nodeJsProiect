import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./userRoutes.js";

export const registerRoutes = (app) => {
  //register all routes

  app.get("/users", getAllUsers);
  app.get("/users/:id", getUserById);
  app.post("/users", createUser);
  app.patch("/users/:id", updateUser);
  app.delete("/users/:id", deleteUser);
};
