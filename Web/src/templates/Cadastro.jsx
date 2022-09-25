import React, { useState, useContext } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export const Cadastro = () => {
  const { cadastrar } = useContext(AuthContext)
  let navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleClickEnviar = async () => {
    if (!login || !senha || !confirmarSenha) {
      setFeedback('Preencha todos os campos')
    } else if (senha !== confirmarSenha) {
      setFeedback('Digite as senhas iguais')
    } else {
      if (await cadastrar(login, senha)) {
        setFeedback('')
        navigate('/')
      } else {
        setFeedback('Usuario já existe')
      }
    }
  }

  const handleClickVoltar = () => {
    navigate(-1)
  }

  return (
    <div className="w-screen h-screen bg-[#5DC5F1] flex justify-center items-center">
      <div className="w-full h-full lg:h-auto lg:w-auto md:h-auto md:w-auto bg-white md:rounded-xl p-4 flex flex-col items-center">
        <div className="text-4xl md:text-5xl mb-4 text-[#5DC5F1] font-black">CADASTRO</div>
        <hr className="w-full h-5 border-[#5DC5F1]" />
        <div className="grid grid-cols-1 ">
          <Input type="text" titulo="Usuário" valor={login} onChange={setLogin} />
          <Input type="password" titulo="Senha" valor={senha} onChange={setSenha} />
          <Input type="password" titulo="Confirmar Senha" valor={confirmarSenha} onChange={setConfirmarSenha} />
        </div>
        <div className="grid gril-cols-1 gap-3 m-6 w-2/3">
          <Button text="Enviar" onClick={handleClickEnviar} />
          <Button text="Voltar" onClick={handleClickVoltar} />
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  )
}
