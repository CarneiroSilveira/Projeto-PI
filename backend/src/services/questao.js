const questao = require("../models/questao");

class QuestaoService {
    async createQuestao(titulo, descricao, tipo, a, b, c, d, e, idProfessor, idMateria, imagem) {

        const buffer = Buffer.from(imagem, "base64");

        if (buffer.length > 81920) {
            throw new Error("O tamanho máximo de imagem é 10mb. O tamanho da enviada é: " + buffer.length);
        }

        if (!titulo || !descricao || !tipo || !a || !b || !c || !d || !e || !idProfessor || !idMateria) {
            throw new Error("Titulo, descrição, tipo, a, b, c, d, e, idProfessor, idMateria são obrigatórios.");
        }

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }

        if (a.length > 1024 || b.length > 1024 || c.length > 1024 || d.length > 1024 || e.length > 1024) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho das questões que banco de dados é caro. O máximo é 1024 caracteres");
        }

        const questaoValue = await ({
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
            imagem: null
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
        const buffer = Buffer.from(imagem, "base64");

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }

        if (buffer.length > 81920) {
            throw new Error("O tamanho máximo de imagem é 10mb. O tamanho da enviada é: " + buffer.length);
        }

        if (a.length > 1024 || b.length > 1024 || c.length > 1024 || d.length > 1024 || e.length > 1024) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho das questões que banco de dados é caro. O máximo é 1024 caracteres");
        }

        oldQuestao.titulo = titulo;
        oldQuestao.descricao = descricao;
        oldQuestao.tipo = tipo;
        oldQuestao.a = a;
        oldQuestao.b = b;
        oldQuestao.c = c;
        oldQuestao.d = d;
        oldQuestao.e = e;
        oldQuestao.idProfessor = idProfessor;
        oldQuestao.idMateria = idMateria;
        oldQuestao.imagem = imagem;
        oldQuestao.save();
        return oldUser;
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