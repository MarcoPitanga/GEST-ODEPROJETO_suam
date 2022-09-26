import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Layout } from '../components/Layout'
import { Usuario } from '../model/Usuario'

export const Registrar = () => {
  const [cpf, setCpf] = useState()
  const [nome, setNome] = useState()
  const [data, setData] = useState()
  const [feedback, setFeedback] = useState()

  const apiUsuario = new Usuario()

  const handleClickEnviar = async () => {
    if (cpf && nome && data) {
      var dia = data.split('-')[2]
      var mes = data.split('-')[1]
      var ano = data.split('-')[0]

      const dataAtual = new Date()
      const dataInput = new Date(ano, mes - 1, dia)
      if (cpf.length < 14) {
        setFeedback('CPF inválido')
      } else if (dataAtual.valueOf() >= dataInput.valueOf()) {
        setFeedback('Data inválida')
      } else if (!(await apiUsuario.buscarCliente(cpf))) {
        apiUsuario.registrar(cpf, nome, data)
        setCpf('')
        setNome('')
        setData('')
        setFeedback('Consulta marcada com sucesso')
      } else {
        setFeedback('Cliente já está agendado')
      }
    } else {
      setFeedback('Preencha todos os campos')
    }
  }
  return (
    <Layout titulo="REGISTRAR">
      <Input type="number" valor={cpf} cpf="true" onChange={setCpf} titulo="CPF" />
      <Input type="text" valor={nome} onChange={setNome} titulo="Nome" />
      <div className="grid grid-cols-2 md:gap-2 mt-6">
        <label className="text-[#5DC5F1] p-3 font-black">NOVA DATA</label>
        <Input type="date" valor={data} onChange={setData} className={`text-center`} />
      </div>
      <p className={`text-center font-semibold`}>{feedback}</p>
      <div className="flex justify-center">
        <Button text="Enviar" onClick={handleClickEnviar} className={`w-2/3`} />
      </div>
    </Layout>
  )
}
