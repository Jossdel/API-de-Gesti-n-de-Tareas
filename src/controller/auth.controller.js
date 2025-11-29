import { AuthService } from "../services/auth.service.js";
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await AuthService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userRegister = await AuthService.register(name, email, password);
    res.status(201).json(userRegister);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
