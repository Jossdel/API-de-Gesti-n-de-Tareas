import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./env.js";
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});
export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión establecida con Sequelize");
    await sequelize.sync();
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
  }
};
