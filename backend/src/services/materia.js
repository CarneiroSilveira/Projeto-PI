const materia = require("../model/materia");
const { nameRegex } = require("../common/regex")

class MateriaService {
    async createMateria(nome) {
        if (!nameRegex.test(nome)) {
            throw new Error("O nome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }
        materia.create({
            nome: nome
        });
    }
    async findMateria(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const MateriaValue = await materia.findByPk(id);

        if (!MateriaValue) {
            throw new Error("Materia não encontrada.");
        }

        return MateriaValue;
    }
    async update(id, nome) {
        const oldUser = await usuario.findByPk(id);
        if (!nameRegex.test(nome)) {
            throw new Error("O nome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }
        oldUser.nome = nome;
        oldUser.save();
        return oldUser;
    }
    async listAll() {
        return materia.findAll();
    }
    async delete(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const materiaValue = await this.findMateria(id);
        materiaValue.destroy();

        return;
    }
}

module.exports = new MateriaService();