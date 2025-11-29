import { UserRepository } from "../Repository/user.repository.js";
import jwt from "jsonwebtoken";
import argon from "argon2";
import { JWT_SECRET } from "../config/env.js";
export const AuthService = {
  register: async (name, email, password) => {
    const userExists = await UserRepository.findByEmail(email);
    if (userExists) throw new Error("El usuario ya existe.");
    const hashPassword = await argon.hash(password);
    return await UserRepository.create({ name, email, password: hashPassword });
  },
  login: async (email, password) => {
    const user = await UserRepository.findByEmail(email);

    if (!user) throw new Error("invalidated email");

    const validPass = await argon.verify(user.password, password);
    if (!validPass) throw new Error("invalidated password");
    const userJson = user.toJSON();
    const { password: noSafe, ...userWithoutPassword } = userJson;

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7h" }
    );

    return { token, user: userWithoutPassword };
  },
};
