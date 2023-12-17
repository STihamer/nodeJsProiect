import User from "../models/User/userModel.js";
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getAllUsers = async (req, res) => {
  let users = await User.find();

  res.json(users);
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

export const createUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const newUser = new User({
    name,
    email,
  });
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json(error.errors);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

  const name = req.body.name;
  const email = req.body.email;
  let user = await User.findById(id);

  try {
    await User.updateOne(user, { name, email }, { runValidators: true });
    user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json(error.errors);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  await User.deleteOne(user);
  res.json(user);
};
