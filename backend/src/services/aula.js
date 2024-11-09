const aula = require("../models/aula");

class AulaService {
    async createAula(titulo, descricao, idProfessor, idMateria, imagem, video) {
        if (!titulo || !descricao || !idProfessor || !idMateria) {
            throw new Error("titulo, descirção, idProfessor e idMateria são obrigatórios.");
        }

        if (descricao.length > 65536) {
            throw new Error("Calma ai usuário, vamos manerar no tamanho da descrição que banco de dados é caro. O máximo é 65536 caracteres");
        }
        const aulaValue = await ({
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

    }

    async findAula() {

    }

    async findAulas() {

    }

    async delete() {

    }
}