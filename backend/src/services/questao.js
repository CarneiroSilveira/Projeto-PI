const questao = require("../models/questao");

class QuestaoService {
    async createQuestao(titulo, descricao, tipo, a, b, c, d, e, idProfessor, idMateria, imagem) {

        if (!titulo || !descricao || !tipo || !a || !b || !c || !d || !e || !idProfessor || !idMateria) {
            throw new Error("Titulo, descrição, tipo, a, b, c, d, e, idProfessor, idMateria são obrigatórios.");
        }

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }

        if (a.length > 1024 || b.length > 1024 || c.length > 1024 || d.length > 1024 || e.length > 1024) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho das questões que banco de dados é caro. O máximo é 1024 caracteres");
        }

        const questaoValue = await questao.create({
            titulo,
            descricao,
            tipo,
            a,
            b,
            c,
            d,
            e,
            idProfessor,
            idMateria,
            imagem
        });

        return questaoValue;
    }

    async findQuestao(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const questaoValue = await questao.findByPk(id);

        if (!questaoValue) {
            throw new Error("Questão não encontrada.");
        }

        return questaoValue;
    }

    async update(id, titulo, descricao, tipo, a, b, c, d, e, idProfessor, idMateria, imagem) {
        const oldQuestao = await questao.findByPk(id);

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }

        if (a.length > 1024 || b.length > 1024 || c.length > 1024 || d.length > 1024 || e.length > 1024) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho das questões que banco de dados é caro. O máximo é 1024 caracteres");
        }

        oldQuestao.titulo = titulo || oldQuestao.titulo;
        oldQuestao.descricao = descricao || oldQuestao.descricao;
        oldQuestao.tipo = tipo || oldQuestao.tipo;
        oldQuestao.a = a || oldQuestao.a;
        oldQuestao.b = b || oldQuestao.b;
        oldQuestao.c = c || oldQuestao.c;
        oldQuestao.d = d || oldQuestao.d;
        oldQuestao.e = e || oldQuestao.e;
        oldQuestao.idProfessor = idProfessor || oldQuestao.idProfessor;
        oldQuestao.idMateria = idMateria || oldQuestao.idMateria;
        oldQuestao.imagem = imagem || oldQuestao.imagem;
        oldQuestao.save();

        return oldQuestao;
    }

    async delete(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const questaoValue = await this.findQuestao(id);
        questaoValue.destroy();

        return;
    }
}

module.exports = new QuestaoService();