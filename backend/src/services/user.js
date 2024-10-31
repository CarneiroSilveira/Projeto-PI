const usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { nameRegex, usernameRegex, senhaRegex, emailRegex, dataRegex, cpfRegex } = require("../common/regex");
const Professor = require("../models/professor");
const Moderador = require("../models/moderador");

const SECRET_KEY = "exemplo";
const SALT_VALUE = 10;
const generos = ['Masculino', 'Feminino', 'Nao-Binario', 'Outro']

class UserService {
  async createUser(username, email, senha, nascimento, nome, sobrenome, genero) {

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

    const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);
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
    });

    return userValue;
  }

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

    const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);
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
  async createProfessor(username, email, senha, nascimento, nome, sobrenome, genero, cpf) {
    if (!username || !email || !senha || !nascimento || !nome || !sobrenome || !genero || !cpf) {
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
    if (!generos.includes(genero)) {
      throw new Error("Você deve passar um genero valido!");
    }

    // Validação de nascimento
    if (!dataRegex.test(nascimento)) {
      throw new Error("Erro: A data deve estar no formato YYYY-MM-DD e ser uma data válida.");
    }
    // Validação de cpf
    if (!cpfRegex.test(cpf)) {
      console.log(cpf)
      throw new Error("Erro: O CPF informado é inválido. Verifique se possui 11 dígitos e está no formato correto (ex: 123.456.789-10).");
    }

    const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);
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
      professor: {
        cpf: cpf
      },
    }, { include: [{ model: Professor, as: 'professor' }] });

    return userValue;
  }

  async createModerador(username, email, senha, nascimento, nome, sobrenome, genero, cpf) {
    if (!username || !email || !senha || !nascimento || !nome || !sobrenome || !genero || !cpf) {
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

    if (!cpfRegex.test(cpf)) {
      throw new Error("Erro: O CPF informado é inválido. Verifique se possui 11 dígitos e está no formato correto (ex: 123.456.789-10).");
    }

    const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);
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
      roles: "Moderador",
      moderador: {
        cpf: cpf
      },
    }, { include: [{ model: Moderador, as: 'moderador' }] });

    return userValue;
  }

  async findUser(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }

    const userValue = await usuario.findByPk(id);

    if (!userValue) {
      throw new Error("Usuário não encontrado.");
    }

    return userValue;
  }

  async update(id, username, email, senha, nome, sobrenome, biografia, genero, nascimento) {
    const oldUser = await usuario.findByPk(id);
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
    oldUser.biografia = biografia;
    oldUser.genero = genero;
    oldUser.sobrenome = sobrenome;
    oldUser.nascimento = nascimento
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
    return usuario.findAll();
  }

  async login(email, senha) {
    if (email === undefined || senha === undefined) {
      throw new Error("Email e senha são obrigatórios.");
    }

    const userValue = await usuario.findOne({ where: { email } });

    if (!userValue) {
      throw new Error("[1] Usuário e senha inválidos.");
    }

    const senhaValida = await bcrypt.compare(String(senha), userValue.senha);
    if (!senhaValida) {
      throw new Error("[2] Usuário e senha inválidos.");
    }

    return jwt.sign({ id: userValue.id }, SECRET_KEY, { expiresIn: 60 * 60 });
  }
}

module.exports = new UserService();