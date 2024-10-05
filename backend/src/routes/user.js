const express = require("express");

const UserController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/perfil", authMiddleware(), UserController.findContext);
router.get("/", authMiddleware(), UserController.findUsers); // DELETE ME

router.put("/admin/users/:id", authMiddleware(["Administrador"]), UserController.updateUser);
router.delete("/admin/users/:id", authMiddleware(["Administrador"]), UserController.deleteUser);
router.get("/admin/users", authMiddleware(["Administrador"]), UserController.findUsers); // DELETE ME

module.exports = router;