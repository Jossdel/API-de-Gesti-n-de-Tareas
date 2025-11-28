import { User } from "../model/user.model.js";

export const UserRepository = {
  findAll: async () => {
    return await User.findAll();
  },

  findById: async (id) => {
    return await User.findByPk(id);
  },

  create: async (data) => {
    return await User.create(data);
  },

  delete: async (id) => {
    return await User.destroy({ where: { id } });
  },

  update: async (id, data) => {
    return await User.update({ where: { id } }, data);
  },
};
