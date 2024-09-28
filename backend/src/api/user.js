const UserController = require('../controller/user')

class UserApi {
    async createUser(req, res) {
        const { username, email, senha, dataNacimento, nome, sobrenome, genero } = req.body

        try {
            const user = await UserController.createUser(username, email, senha, dataNacimento, nome, sobrenome, genero)
            return res.status(201).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}` })
        }
    }

    async updateUser(req, res) {
        const id = req.params.id || req.session.id
        const { nome, email, senha } = req.body

        try {
            const user = await UserController.update(Number(id), nome, email, senha)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}` })
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id || req.session.id // Quando for fazer uma verificação se é o usuário ou o administrador que está fazendo esssa açao adicione isto

        try {
            await UserController.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}` })
        }
    }

    async findUsers(req, res) {
        try {
            const users = await UserController.find()
            return res.status(200).send(users)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async findContext(req, res) {
        try {
            const user = await UserController.findUser(req?.session?.id || 0)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async login(req, res) {
        const { email, senha } = req.body
        console.log(req.body)
        try {
            const token = await UserController.login(email, senha)

            res.status(200).send({ token })
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
}

module.exports = new UserApi()