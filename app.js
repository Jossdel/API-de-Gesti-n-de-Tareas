import express from "express";
import { connection } from "./src/config/db.js";
import { router } from "./src/routes/user.route.js";
connection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
const server = process.env.PORT || 3000;
app.listen(server, () => {
  console.log(`the server is running on port ${server}🔷`);
});
