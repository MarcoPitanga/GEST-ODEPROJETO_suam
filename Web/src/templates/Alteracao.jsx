import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Layout } from '../components/Layout'
import { Usuario } from '../model/Usuario'

export const Alteracao = () => {
  const [id, setId] = useState()
  const [cpf, setCpf] = useState()
  const [antigaData, setAntigaData] = useState()
  const [novaData, setNovaData] = useState()
  const [feedback, setFeedback] = useState()

  const apiUsuario = new Usuario()

  const handleClickBuscar = async () => {
    setAntigaData('')
    setNovaData('')
    if (cpf >= 10000000000 && cpf <= 99999999999) {
      const cliente = await apiUsuario.buscarCliente(cpf)
      if (cliente) {
        setAntigaData(cliente.data)
        setId(cliente.id)
        setFeedback('')
      } else {
        setFeedback('Consulta não encontrada')
      }
    } else {
      setFeedback('CPF inválido')
    }
  }

  const handleClickSalvar = () => {
    if (novaData) {
      var dia = novaData.split('-')[2]
      var mes = novaData.split('-')[1]
      var ano = novaData.split('-')[0]

      const dataAtual = new Date()
      const dataInput = new Date(ano, mes - 1, dia)

      if (dataAtual.valueOf() >= dataInput.valueOf()) {
        setFeedback('Data inválida')
      } else {
        apiUsuario.atualizarData(id, novaData)
        setFeedback('Consulta atualizada')
        setAntigaData('')
        setId('')
        setCpf('')
      }
    } else {
      setFeedback('Preencha a data')
    }
  }

  const handleClickExcluir = () => {
    apiUsuario.deletarAgendamento(id)
    setFeedback('Consulta excluida')
    setAntigaData('')
    setId('')
    setCpf('')
  }

  return (
    <Layout titulo="ALTERAÇÃO">
      <div className="w-full flex justify-between items-center">
        <Input type="number" valor={cpf} onChange={setCpf} titulo="CPF" />
        <Button text="Buscar" onClick={handleClickBuscar} className={`w-1/3 h-1/3 ml-5 mt-2`} />
      </div>
      {!antigaData && <p className="text-center font-semibold">{feedback}</p>}
      {antigaData && (
        <>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <label className="text-[#5DC5F1] p-3 font-black">DATA ATUAL </label>
            <Input type="date" disabled="true" valor={antigaData.split('T')[0]} className={`text-center`} />
            <label className="text-[#5DC5F1] p-3 font-black">NOVA DATA </label>
            <Input type="date" valor={novaData} onChange={setNovaData} className={`text-center`} />
          </div>
          <p className="text-center font-semibold">{feedback}</p>
          <div className="flex justify-center gap-2">
            <Button text="Excluir" onClick={handleClickExcluir} className={`w-2/4`} />
            <Button text="Salvar" onClick={handleClickSalvar} className={`w-2/4`} />
          </div>
        </>
      )}
    </Layout>
  )
}
