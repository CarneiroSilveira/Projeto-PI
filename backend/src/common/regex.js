// Regex para validação de nome e sobrenome (somente letras e pelo menos 2 caracteres)
const nameRegex = /^[A-Za-z]{2,}$/;

// Regex para validação de username
const usernameRegex = /^(?=.{3,16}$)[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;

// Regex para validação de senha
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regex para validação de email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const dataRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

module.exports = {
    nameRegex,
    usernameRegex,
    senhaRegex,
    emailRegex,
    dataRegex
}