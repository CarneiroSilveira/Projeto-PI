const express = require("express");
// const cors = require("cors");
const database = require("./config/database");
require('dotenv').config();
const UserController = require("./controllers/user");
const UserRouter = require("./routes/user");
const authMiddleware = require("./middlewares/authMiddleware");
const MateriaController = require("./routes/materia");

const app = express();
app.use(express.json());

// app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "OK" });
// });

app.post("/api/v1/login", UserController.login);
app.post("/api/v1/cadastro", UserController.createUser);

app.use("/api/v1/user", authMiddleware(), UserRouter);
app.use("/api/v1/materias", authMiddleware(), MateriaController);

database.db
  .sync({ force: true })
  .then((_) => {
    app.listen(3000, (_) => {
      console.log("Server running on port 3000");
    });
  })
  .catch((e) => {
    console.error(`Erro ao inicializar o banco de dados ${e}`);
  });