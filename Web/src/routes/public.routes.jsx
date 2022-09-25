import { Routes, Route } from 'react-router-dom'
import { Erro } from '../templates/Erro'
import { Login } from '../templates/Login'
import { Cadastro } from '../templates/Cadastro'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Cadastro" element={<Cadastro />}></Route>
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}
