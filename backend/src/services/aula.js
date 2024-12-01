const aula = require("../models/aula");

class AulaService {
    async createAula(titulo, descricao, idProfessor, idMateria, imagem, video) {
        if (!titulo || !descricao || !idProfessor || !idMateria) {
            throw new Error("titulo, descirção, idProfessor e idMateria são obrigatórios.");
        }

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }
        const aulaValue = await aula.create({
            titulo,
            descricao,
            idProfessor,
            idMateria,
            imagem,
            video
        })
    }

    async update(id, titulo, descricao, idProfessor, idMateria, imagem, video) {
        const oldAula = await aula.findByPk(id);
        oldAula.titulo = titulo || oldAula.titulo;
        oldAula.descricao = descricao || oldAula.descricao;
        oldAula.idProfessor = idProfessor || oldAula.idProfessor;
        oldAula.idMateria = idMateria;
        oldAula.imagem = imagem || oldAula.imagem;
        oldAula.video = video || oldAula.video;
        oldAula.save();
        return oldAula;
    }

    async findAula(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const AulaValue = await aula.findByPk(id);

        if (!AulaValue) {
            throw new Error("Materia não encontrada.");
        }

        return AulaValue;
    }

    async listAll() {
        return aula.findAll();
    }

    async delete() {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const aulaValue = await this.findMateria(id);
        aulaValue.destroy();
    }
}

module.exports = new AulaService();