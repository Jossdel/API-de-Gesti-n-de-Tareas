import { UserRepository } from "../Repository/user.repository.js";
import { hash } from "argon2";
export const UserService = {
  getById: async (id) => {
    return await UserRepository.findById(id);
  },

  create: async (data) => {
    const userExists = await UserRepository.findByEmail(email);
    if (userExists) throw new Error("El usuario ya existe.");
    data.password = await hash(data.password);
    return await UserRepository.create(data);
  },
  delete: async (id) => {
    return await UserRepository.delete({ where: { id } });
  },
  update: async (data, id) => {
    if (data.password) {
      data.password = await hash(data.password);
    }

    return await UserRepository.update({ where: { id } }, data);
  },
  findAll: async (options = {}) => {
    return await UserRepository.findAll(options);
  },
};
