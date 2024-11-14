import api from 'api'

export const createUser = async (username, email, senha, nacimento, nome, sobrenome, genero) => {
    const body = { username, email, senha, nacimento, nome, sobrenome, genero }
    const response = await api.post("/api/v1/cadastro", body)
    return response.data
}

export const loginUser = async (email, senha) => {
    const body = { email, senha }
    const response = await api.post("/api/v1/login", body)
    return response.data
}