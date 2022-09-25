import React, { useContext } from 'react'
import { Button } from './../components/Button'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export const Menu = () => {
  const { deslogar } = useContext(AuthContext)
  let navigate = useNavigate()

  const handleClickMenu = (pagina) => {
    navigate(`/${pagina}`)
  }

  return (
    <>
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 lg:gap-10">
        <Button text="Registrar" onClick={() => handleClickMenu('registrar')} />
        <Button text="Alteração" onClick={() => handleClickMenu('alteracao')} />
        <Button text="Agendamentos" onClick={() => handleClickMenu('agendamentos')} />
        <Button text="Sair" onClick={deslogar} />
      </div>
    </>
  )
}
