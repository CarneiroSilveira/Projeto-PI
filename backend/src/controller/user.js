const user = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "exemplo";
const SALT_VALUE = 10;

class UserController {
  async createUser(username, email, senha, dataNacimento, nome, sobrenome) {
    // Regex para validação de nome e sobrenome (somente letras e pelo menos 2 caracteres)
    const nameRegex = /^[A-Za-z]{2,}$/;

    // Regex para validação de username
    const usernameRegex = /^(?=.{3,16}$)[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;

    // Regex para validação de senha
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Regex para validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!username || !email || !senha || !dataNacimento || !nome || !sobrenome) {
      throw new Error("Nome, email, senha e a data de nacimento são obrigatórios.");
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
    if (!senhaRegex.test(password)) {
      throw new Error("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.");
    }

    // Validação de email
    if (!emailRegex.test(email)) {
      throw new Error("O email deve estar em um formato válido, como exemplo@dominio.com.");
    }


    const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);

    const userValue = await user.create({
      username,
      email,
      dataNacimento,
      senha: cypherSenha,
    });

    return userValue;
  }

  async findUser(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }

    const userValue = await user.findByPk(id);

    if (!userValue) {
      throw new Error("Usuário não encontrado.");
    }

    return userValue;
  }

  async update(id, nome, email, senha, nome, sobrenome) {
    const oldUser = await user.findByPk(id);
    if (email) {
      const sameEmail = await user.findOne({ where: { email } });
      if (sameEmail && sameEmail.id !== id) {
        throw new Error("Email já cadastrado.");
      }
    }
    oldUser.nome = nome || oldUser.nome;
    oldUser.email = email || oldUser.email;
    oldUser.nome = nome;
    oldUser.sobrenome = sobrenome;
    oldUser.senha = senha
      ? await bcrypt.hash(String(senha), SALT_VALUE)
      : oldUser.senha;
    oldUser.save();

    return oldUser;
  }

  async delete(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }
    const userValue = await this.findUser(id);
    userValue.destroy();

    return;
  }

  async find() {
    return user.findAll();
  }

  async login(email, senha) {
    if (email === undefined || senha === undefined) {
      throw new Error("Email e senha são obrigatórios.");
    }

    const userValue = await user.findOne({ where: { email } });

    if (!userValue) {
      throw new Error("[1] Usuário e senha inválidos.");
    }

    const senhaValida = bcrypt.compare(String(senha), userValue.senha);
    if (!senhaValida) {
      throw new Error("[2] Usuário e senha inválidos.");
    }

    return jwt.sign({ id: userValue.id }, SECRET_KEY, { expiresIn: 60 * 60 });
  }
}

module.exports = new UserController();