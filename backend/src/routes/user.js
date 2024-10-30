const express = require("express");

const UserController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/perfil", authMiddleware(), UserController.findContext);
router.get("/", authMiddleware(), UserController.findUsers); // DELETE ME

router.put("/admin/users/:id", authMiddleware(["Administrador", "Professor", "Moderador"]), UserController.updateUser);
router.delete("/admin/users/:id", authMiddleware(["Administrador", "Professor", "Moderador"]), UserController.deleteUser);
router.get("/admin/users", authMiddleware(["Administrador", "Professor", "Moderador"]), UserController.findUsers); // DELETE ME
// router.post("/admin/newadmin", authMiddleware(["Administrador"]), UserController.createAdmin); Utilizar somente quando iniciar a versão beta
// router.post("/admin/newmod", authMiddleware(["Administrador"]), UserController.createModerador); Utilizar somente quando iniciar a versão beta
// router.post("/admin/newprof", authMiddleware(["Administrador"]), UserController.createProfessor); Utilizar somente quando iniciar a versão beta

// O authMiddleware possui 3 tipos de uso principais: quando ele não é utilizado na rota é quando vc diz que ela pode ser acessada por qualquer usuário estando logado ou não.
// Quando ele é utilizado na rota mas não recebe nada ex: authMiddleware(). Neste modo apenas usuários logados podem acessar está rota.
// E pôr ultimo quando ele é utilizado na rota e recebe uma lista com um ou mais parametros ex: authMiddleware(["Administrador", "Moderador", "Professor"])

module.exports = router;