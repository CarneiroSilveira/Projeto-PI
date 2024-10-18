const express = require("express");

const MateriaController = require("../controllers/materia");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware(), MateriaController.findMaterias);
router.get("/:id", authMiddleware(), MateriaController.findUmaMateria);

router.put("/admin/materias/:id", authMiddleware(["Administrador"]), MateriaController.updateMateria);
router.delete("/admin/materia/:id", authMiddleware(["Administrador"]), MateriaController.deleteMateria);
router.post("/admin/materia", authMiddleware(["Administrador"]), MateriaController.createMateria); // DELETE ME

module.exports = router;