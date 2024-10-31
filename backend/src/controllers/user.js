const UserService = require('../services/user')

class UserController {
    async createUser(req, res) {
        const { username, email, senha, nascimento, nome, sobrenome, genero } = req.body

        try {
            const user = await UserService.createUser(username, email, senha, nascimento, nome, sobrenome, genero)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}` });
        }
    }

    async createAdmin(req, res) {
        const { username, email, senha, nascimento, nome, sobrenome, genero } = req.body

        try {
            const user = await UserService.createAdmin(username, email, senha, nascimento, nome, sobrenome, genero)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar Administrador ${e.message}` });
        }
    }

    async createProfessor(req, res) {
        const cpf = req.body.professor.cpf
        const { username, email, senha, nascimento, nome, sobrenome, genero } = req.body

        try {
            const user = await UserService.createProfessor(username, email, senha, nascimento, nome, sobrenome, genero, cpf)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar Professor ${e.message}` });
        }
    }

    async createModerador(req, res) {
        const { username, email, senha, nascimento, nome, sobrenome, genero, cpf } = req.body

        try {
            const user = await UserService.createModerador(username, email, senha, nascimento, nome, sobrenome, genero, cpf)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar Moderador ${e.message}` });
        }
    }

    async updateUser(req, res) {
        const id = req.params.id || req.session.id
        const { username, email, senha, nome, sobrenome, biografia, genero, nascimento } = req.body

        try {
            const user = await UserService.update(Number(id), username, email, senha, nome, sobrenome, biografia, genero, nascimento)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}` })
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id || req.session.id // Quando for fazer uma verificação se é o usuário ou o administrador que está fazendo esssa açao adicione isto

        try {
            await UserService.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}` })
        }
    }

    async findUsers(req, res) {
        try {
            const users = await UserService.find()
            return res.status(200).send(users)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async findContext(req, res) {
        try {
            const user = await UserService.findUser(req?.session?.id || 0)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async login(req, res) {
        const { email, senha } = req.body
        console.log(req.body)
        try {
            const token = await UserService.login(email, senha)

            res.status(200).send({ token })
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
}

module.exports = new UserController()