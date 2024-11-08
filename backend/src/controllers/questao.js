const QuestaoService = require('../services/questao');

class QuestaoController {
    async createQuestao(req, res) {
        const { nome } = req.body

        try {
            const questao = await QuestaoService.createQuestao(nome)
            return res.status(201).send(questao)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}` })
        }
    }
    async updateQuestao(req, res) {
        const id = req.params.id || req.session.id
        const { nome } = req.body

        try {
            const questao = await QuestaoService.update(Number(id), nome)
            return res.status(200).send(questao)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}` })
        }
    }

    async deleteQuestao(req, res) {
        const id = req.params.id || req.session.id // Quando for fazer uma verificação se é o usuário ou o administrador que está fazendo esssa açao adicione isto

        try {
            await QuestaoService.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}` })
        }
    }

    async findQuestao(req, res) {
        const id = req.params.id;
        try {
            const questao = await QuestaoService.findQuestao(Number(id));
            return res.status(200).send(questao);
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async findQuestoes(req, res) {
        try {
            const questao = await QuestaoService.listAll()
            return res.status(200).send(questao)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuários ${e.message}` })
        }
    }
}

module.exports = new QuestaoController()