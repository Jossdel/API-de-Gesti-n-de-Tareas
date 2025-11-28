import express from "express";
import { connection } from "./src/config/db.js";
import { router } from "./src/routes/user.route.js";
connection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/help", (req, res) => {
  res.json({
    message: "Centro de ayuda de la API",
    routes: {
      home: {
        method: "GET",
        route: "/",
        description: "Verifica que el servidor está funcionando",
      },
      createUser: {
        method: "POST",
        route: "/createuser",
        description: "Crear un nuevo usuario",
      },
      findUser: {
        method: "GET",
        route: "/user/:id",
        description: "Buscar un usuario por ID",
      },
    },
    author: "Josué Delgadillo",
    version: "1.0",
  });
});

app.use(router);
const server = process.env.PORT || 3000;
app.listen(server, () => {
  console.log(`the server is running on port ${server}🔷`);
});
