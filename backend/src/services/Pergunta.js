const pergunta = require("../models/perguta");

class perguntaService {
    async createPergunta(titulo, corpo, idUsuario, idQuestoes, idAula) {
        if (!titulo || !corpo || !idUsuario) {
            throw new Error("o titulo, corpo, idUsuario são obrigatórios.");
        }
        const perguntaValue = await pergunta.create({
            titulo,
            corpo,
            idUsuario,
            idQuestoes,
            idAula
        })
    }
}