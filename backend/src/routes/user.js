const express = require("express");

const UserApi = require("../api/user");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/perfil", authMiddleware(), UserApi.findContext);
router.get("/", authMiddleware(), UserApi.findUsers); // DELETE ME

router.put("/admin/users/:id", authMiddleware(["Administrador"]), UserApi.updateUser);
router.delete("/admin/users/:id", authMiddleware(["Administrador"]), UserApi.deleteUser);
router.get("/admin/users", authMiddleware(["Administrador"]), UserApi.findUsers); // DELETE ME

module.exports = router;