const MateriaService = require('../services/materia');

class MateriaController {
    async createMateria(req, res) {
        const { nome } = req.body

        try {
            const materia = await MateriaService.createMateria(nome)
            return res.status(201).send(materia)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}` })
        }
    }
    async updateMateria(req, res) {
        const id = req.params.id || req.session.id
        const { nome } = req.body

        try {
            const materia = await MateriaService.update(Number(id), nome)
            return res.status(200).send(materia)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}` })
        }
    }

    async deleteMateria(req, res) {
        const id = req.params.id || req.session.id // Quando for fazer uma verificação se é o usuário ou o administrador que está fazendo esssa açao adicione isto

        try {
            await MateriaService.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}` })
        }
    }

    async findUmaMateria(req, res) {
        try {
            const id = req.params.id;

            const materia = await MateriaService.findMateria(Number(id));
            return res.status(200).send(materia);
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async findMaterias(req, res) {
        try {
            const materias = await MateriaService.listAll()
            return res.status(200).send(materias)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuários ${e.message}` })
        }
    }
}

module.exports = new MateriaController()