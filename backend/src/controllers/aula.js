const AulaService = require("../services/aula");

class AulaController {
    async createAula(req, res) {
        const { titulo, descricao, idProfessor, idMateria, imagem, video } = req.body

        try {
            const aula = await AulaService.createAula(titulo, descricao, idProfessor, idMateria, imagem, video);
            return res.status(201).send(aula);
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar aula ${e.message}` })
        }
    }

    async updateAula(req, res) {
        const id = req.params.id || req.session.id
        const { titulo, descricao, idProfessor, idMateria, imagem, video } = req.body

        try {
            const aula = await AulaService.update(Number(id), titulo, descricao, idProfessor, idMateria, imagem, video);
            return res.status(201).send(aula)
        } catch (e) {
            return res.status(400).send({ error: `Error ao alterar aula ${e.message}` })
        }
    }

    async deleteAula(req, res) {
        const id = req.params.id || req.session.id

        try {
            const aula = await AulaService.delete(Number(id));
            return res.status(201).send(aula)
        } catch (e) {
            return res.status(400).send({ error: `Error ao alterar aula ${e.message}` });
        }
    }

    async findAula(req, res) {
        const id = req.params.id;
        try {
            const aula = await AulaService.findAula(Number(id));
            return res.status(200).send(aula);
        } catch (e) {
            return res.status(400).send({ error: `Error ao alterar aula ${e.message}` });
        }
    }

    async findAulas(req, res) {
        try {
            const aula = await AulaService.listAll();
            return res.status(200).send(aula);
        } catch (e) {
            return res.status(400).send({ error: `Error ao alterar aula ${e.message}` });
        }
    }
}

module.exports = new AulaController()