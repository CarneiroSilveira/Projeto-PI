const express = require("express");

const AulaController = require("../controllers/aula");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", AulaController.findAulas);
router.get("/:id", AulaController.findAula);

router.put("/admin/Aulas/:id", authMiddleware(["Administrador", "Professor"]), AulaController.updateAula);
router.delete("/admin/Aula/:id", authMiddleware(["Administrador", "Professor"]), AulaController.deleteAula);
router.post("/admin/Aula", authMiddleware(["Administrador", "Professor"]), AulaController.createAula); // DELETE ME

// O authMiddleware possui 3 tipos de uso principais: quando ele não é utilizado na rota é quando vc diz que ela pode ser acessada por qualquer usuário estando logado ou não.
// Quando ele é utilizado na rota mas não recebe nada ex: authMiddleware(). Neste modo apenas usuários logados podem acessar está rota.
// E pôr ultimo quando ele é utilizado na rota e recebe uma lista com um ou mais parametros ex: authMiddleware(["Administrador", "Moderador", "Professor"])

module.exports = router;