import { api } from '../services/api'

export class Usuario {
  cadastrar(login, senha) {
    api.post('cadastrar', {
      login,
      senha
    })
  }

  async verificarLogin(login, senha) {
    const { data } = await api.post(`logar`, {
      login,
      senha
    })
    const [resultado] = data

    if (resultado) {
      this.id = resultado.id
      this.login = resultado.login
      return true
    } else {
      return false
    }
  }

  registrar(cpf, nome, data) {
    api.post('registrar', {
      cpf,
      nome,
      data
    })
  }

  async buscarUsuario(login) {
    const { data } = await api.post(`buscarUsuario`, {
      login
    })
    const [resultado] = data
    if (resultado) {
      return resultado
    } else {
      return false
    }
  }

  async buscarCliente(cpf) {
    const { data } = await api.post(`buscarCliente`, {
      cpf
    })
    const [resultado] = data

    if (resultado) {
      return resultado
    } else {
      return false
    }
  }

  atualizarData(id, data) {
    api.post('atualizar', {
      id,
      data
    })
  }

  deletarAgendamento(id) {
    api.get(`deletarAgendamento/${id}`)
  }

  async listar() {
    const { data } = await api.get(`agendamentos`)

    return data
  }
}
