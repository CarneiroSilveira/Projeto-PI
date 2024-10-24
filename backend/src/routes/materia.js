const express = require("express");

const MateriaController = require("../controllers/materia");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", MateriaController.findMaterias);
router.get("/:id", MateriaController.findUmaMateria);

router.put("/admin/materias/:id", authMiddleware(["Administrador"]), MateriaController.updateMateria);
router.delete("/admin/materia/:id", authMiddleware(["Administrador"]), MateriaController.deleteMateria);
router.post("/admin/materia", authMiddleware(["Administrador"]), MateriaController.createMateria); // DELETE ME

// O authMiddleware possui 3 tipos de uso principais: quando ele não é utilizado na rota é quando vc diz que ela pode ser acessada por qualquer usuário estando logado ou não.
// Quando ele é utilizado na rota mas não recebe nada ex: authMiddleware(). Neste modo apenas usuários logados podem acessar está rota.
// E pôr ultimo quando ele é utilizado na rota e recebe uma lista com um ou mais parametros ex: authMiddleware(["Administrador", "Moderador", "Professor"])

module.exports = router;