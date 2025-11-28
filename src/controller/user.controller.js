import { where } from "sequelize";
import { UserService } from "../services/user.service.js";
//
export const createUser = async (req, res) => {
  try {
    const user = await UserService.create(req.body);

    res.json({
      message: "User created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findUser = async (req, res) => {
  try {
    const id = await UserService.getById(req.params.id);
    res.json({ data: id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const deleteId = await UserService.delete(id);
    if (deleteId === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ Message: "User has been delete", data: deleteId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("User ID is required");
    }
    if (!name || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const updateId = await UserService.update(
      {
        name,
        email,
        password,
      },
      parseInt(id)
    );
    if (updateId === 0) {
      return res.status(404).send("User not found");
    }
    res.send({
      message: "User Updated",
      data: updateId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const GetAllUsers = async (req, res) => {
  try {
    const getAll = await UserService.findAll();
    if (!getAll) {
      return res.status(404).send("Users not found");
    }
    res.json({
      data: getAll,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
