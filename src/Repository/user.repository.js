import { User } from "../model/user.model.js";

export const UserRepository = {
  findAll: async () => {
    return await User.findAll();
  },
  findByEmail: async (email) => {
    return await User.findOne({ where: { email } });
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
