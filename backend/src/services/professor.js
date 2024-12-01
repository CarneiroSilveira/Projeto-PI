const usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const { nameRegex, usernameRegex, senhaRegex, emailRegex, dataRegex, cpfRegex } = require("../common/regex");
const professor = require("../models/professor");
const disciplina = require("../models/disciplina")
require('dotenv').config()

class ProfessorService {
    async createProfessor(username, email, senha, nascimento, nome, sobrenome, genero, cpf, idMateria) {
        if (!username || !email || !senha || !nascimento || !nome || !sobrenome || !genero || !cpf || !idMateria) {
            throw new Error("Nome de usuario, email, senha, nome, sobrenome, genero, a data de nascimento e cpf são obrigatórios.");
        }

        // Validação de nome
        if (!nameRegex.test(nome)) {
            throw new Error("O nome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }

        // Validação de sobrenome
        if (!nameRegex.test(sobrenome)) {
            throw new Error("O sobrenome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }

        // Validação de username
        if (!usernameRegex.test(username)) {
            throw new Error("O nome de usuário deve ter entre 3 e 16 caracteres e pode conter letras, números, pontos ou underscores, mas não pode começar ou terminar com eles.");
        }

        // Validação de senha
        if (!senhaRegex.test(senha)) {
            throw new Error("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.");
        }
        // Validação de email
        if (!emailRegex.test(email)) {
            throw new Error("O email deve estar em um formato válido, como exemplo@dominio.com.");
        }
        // Validação de genero
        if (!process.env.GENEROS.includes(genero)) {
            throw new Error("Você deve passar um genero valido!");
        }

        // Validação de nascimento
        if (!dataRegex.test(nascimento)) {
            throw new Error("Erro: A data deve estar no formato YYYY-MM-DD e ser uma data válida.");
        }
        // Validação de cpf
        if (!cpfRegex.test(cpf)) {
            throw new Error("Erro: O CPF informado é inválido. Verifique se possui 11 dígitos e está no formato correto (ex: 123.456.789-10).");
        }

        const cypherSenha = await bcrypt.hash(String(senha), process.env.SALT_VALUE);
        nascimento = new Date(nascimento);
        nascimento = new Date(nascimento.getFullYear(), nascimento.getMonth(), nascimento.getDate());
        const userValue = await usuario.create({
            nome,
            sobrenome,
            genero,
            username,
            email,
            nascimento,
            senha: cypherSenha,
            roles: "Professor",
        });

        const professorCreated = await professor.create({
            usuarioId: userValue.id,
            cpf: cpf,
        })

        const professorDisiplina = await disciplina.create({
            idProfessor: professorCreated.id,
            idMateria: idMateria
        })

        return {
            nome: userValue.nome,
            sobrenome: userValue.sobrenome,
            genero: userValue.genero,
            username: userValue.username,
            nascimento: userValue.nascimento,
            especialidades: professorDisiplina.idMateria
        };
    }

    async update(id, username, email, senha, nome, sobrenome, biografia, genero, nascimento, cpf, idMateria) {
        const oldUser = await usuario.findByPk(id);
        const oldProf = await professor.findOne({ where: { usuarioId: oldUser.id } })
        const oldDisciplina = await professor.findOne({ where: { idProfessor: oldProf.id } })
        if (email) {
            const sameEmail = await usuario.findOne({ where: { email } });
            if (sameEmail && sameEmail.id !== id) {
                throw new Error("Email já cadastrado.");
            }
        }

        // Validação de nome
        if (!nameRegex.test(nome)) {
            throw new Error("O nome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }

        // Validação de sobrenome
        if (!nameRegex.test(sobrenome)) {
            throw new Error("O sobrenome deve conter apenas letras e ter pelo menos 2 caracteres.");
        }

        // Validação de username
        if (!usernameRegex.test(username)) {
            throw new Error("O nome de usuário deve ter entre 3 e 16 caracteres e pode conter letras, números, pontos ou underscores, mas não pode começar ou terminar com eles.");
        }

        // Validação de senha
        if (!senhaRegex.test(senha)) {
            throw new Error("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.");
        }

        // Validação de email
        if (!emailRegex.test(email)) {
            throw new Error("O email deve estar em um formato válido, como exemplo@dominio.com.");
        }

        // Validação de genero
        if (!generos.includes(genero)) {
            throw new Error("Você deve passar um genero valido!");
        }

        // Validação de nascimento
        if (!dataRegex.test(nascimento)) {
            throw new Error("Erro: A data deve estar no formato YYYY-MM-DD e ser uma data válida.");
        }

        nascimento = new Date(nascimento);
        nascimento = new Date(nascimento.getFullYear(), nascimento.getMonth(), nascimento.getDate());

        oldUser.nome = nome || oldUser.nome;
        oldUser.email = email || oldUser.email;
        oldUser.biografia = biografia || oldUser.biografia;
        oldUser.genero = genero || oldUser.genero;
        oldUser.sobrenome = sobrenome || oldUser.sobrenome;
        oldUser.nascimento = nascimento || oldUser.nascimento;
        oldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT_VALUE)
            : oldUser.senha;
        oldUser.save();

        oldProf.cpf = cpf || oldProf.cpf
        oldProf.save();

        oldDisciplina.idMateria = idMateria || oldDisciplina.idMateria;
        oldDisciplina.save();

        return true;
    }

    async findProf(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const profValue = await professor.findByPk(id);

        if (!profValue) {
            throw new Error("Professor não encontrado.");
        }

        return profValue;
    }

    async listAll() {
        return professor.findAll();
    }

    async delete(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const profValue = await this.findProf(id);
        profValue.destroy();

        return;
    }
}

module.exports = new ProfessorService();