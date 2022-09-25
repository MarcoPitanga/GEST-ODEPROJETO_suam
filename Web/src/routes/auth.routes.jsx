import { Routes, Route } from 'react-router-dom'
import { Alteracao } from '../templates/Alteracao'
import { Registrar } from '../templates/Registrar'
import { Erro } from '../templates/Erro'
import { Agendamentos } from '../templates/Agendamentos'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Registrar />}></Route>
      <Route path="/registrar" element={<Registrar />}></Route>
      <Route path="/agendamentos" element={<Agendamentos />}></Route>
      <Route path="/alteracao" element={<Alteracao />}></Route>
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}
