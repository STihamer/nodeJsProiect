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
import { getUserSettings, updateUserSettings } from "./userSettingsRoutes.js";
import {
  createPost,
  deletePost,
  getPosts,
  getUserPosts,
  updatePost,
} from "./postRoutes.js";
import { modelExists } from "../middleware/modelExistsMiddleware.js";

export const registerRoutes = (app) => {
  //register all routes

  //user routes
  app.get("/users", getAllUsers);
  app.get("/users/:id", getUserById);
  app.post("/users", createUser);
  app.patch("/users/:id", authMiddleware, updateUser);
  app.delete("/users/:id", deleteUser);
  app.post("/users/login", logInUser);
  app.post("/check-token", checkToken);

  //user settings routes
  app.get("/users/:id/settings", getUserSettings);
  app.post("/users/:id/settings", updateUserSettings);

  //posts
  app.get("/posts", getPosts);
  app.get("/users/:id/posts", getUserPosts);
  app.post("/users/:id/posts", createPost);

  app.post("/posts/:id", modelExists("Post", "postId"), updatePost);

  app.delete("/posts/:id", modelExists("Post"), deletePost);
};
