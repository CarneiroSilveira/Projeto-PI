const usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const { nameRegex, usernameRegex, senhaRegex, emailRegex, dataRegex } = require("../common/regex");
require('dotenv').config();

class AdminService {
    async createAdmin(username, email, senha, nascimento, nome, sobrenome, genero) {
        if (!username || !email || !senha || !nascimento || !nome || !sobrenome || !genero) {
            throw new Error("Nome de usuario, email, senha, nome, sobrenome, genero e a data de nascimento são obrigatórios.");
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
            roles: "Administrador",
        });

        return userValue;
    }
}