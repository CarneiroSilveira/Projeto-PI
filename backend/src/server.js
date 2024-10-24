const express = require("express");
// const cors = require("cors");
const database = require("./config/database");
require('dotenv').config();
const UserController = require("./controllers/user");
const UserRouter = require("./routes/user");
const MateriaController = require("./routes/materia");

const app = express();
app.use(express.json());

// app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "OK" });
// });

app.post("/api/v1/login", UserController.login);
app.post("/api/v1/cadastro", UserController.createUser);
app.post("/api/v1/cadastro-admin", UserController.createAdmin); // Quando iniciar a fase beta delete essa rota
app.post("/api/v1/cadastro-professor", UserController.createProfessor); // Quando iniciar a fase beta delete essa rota
app.post("/api/v1/cadastro-moderador", UserController.createModerador); // Quando iniciar a fase beta delete essa rota

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/materias", MateriaController);

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