const pergunta = require("../models/perguta");

class PerguntaService {
    async createPergunta(titulo, corpo, idUsuario, idQuestoes, idAula) {
        if (!titulo || !corpo || !idUsuario && !idQuestoes || idAula) {
            throw new Error("o titulo, corpo, idUsuario são obrigatórios.");
        }
        const perguntaValue = await pergunta.create({
            titulo,
            corpo,
            idUsuario,
            idQuestoes,
            idAula
        })

        return perguntaValue;
    }


}

module.exports = new PerguntaService();