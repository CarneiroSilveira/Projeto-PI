const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const QuestaoController = require("../controllers/questao");

router.get("/", QuestaoController.findQuestoes);
router.get("/:id", QuestaoController.findQuestao);

router.put("/admin/materias/:id", authMiddleware(["Administrador", "Professor"]), QuestaoController.updateQuestao);
router.delete("/admin/materia/:id", authMiddleware(["Administrador", "Professor"]), QuestaoController.deleteQuestao);
router.post("/admin/materia", authMiddleware(["Administrador", "Professor"]), QuestaoController.createQuestao); // DELETE ME

// O authMiddleware possui 3 tipos de uso principais: quando ele não é utilizado na rota é quando vc diz que ela pode ser acessada por qualquer usuário estando logado ou não.
// Quando ele é utilizado na rota mas não recebe nada ex: authMiddleware(). Neste modo apenas usuários logados podem acessar está rota.
// E pôr ultimo quando ele é utilizado na rota e recebe uma lista com um ou mais parametros ex: authMiddleware(["Administrador", "Moderador", "Professor"])

module.exports = router;