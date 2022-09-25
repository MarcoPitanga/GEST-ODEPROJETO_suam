import React from 'react'
import useSWR from 'swr'
import { Layout } from './../components/Layout'
import { fetcher } from '../services/api'

export const Agendamentos = () => {
  const { data } = useSWR('agendamentos', fetcher)

  function formataStringData(data) {
    var dia = data.split('-')[2]
    var mes = data.split('-')[1]
    var ano = data.split('-')[0]

    return dia + '-' + ('0' + mes).slice(-2) + '-' + ('0' + ano).slice(-2)
  }

  return (
    <Layout titulo="AGENDAMENTOS">
      {data && data.length == 0 && <p>Nenhuma consulta agendada</p>}
      {data && data.length > 0 && (
        <div className="bg-[#5DC5F1] border-2 border-[#0cb5fd] text-white">
          <div className="scrollbar flex justify-center text-center  max-w-max max-h-max md:max-h-72 xl:max-h-80 ">
            <table>
              <tr className="font-black">
                <td>CPF</td>
                <td>Nome</td>
                <td>Data</td>
              </tr>
              {data.map((cliente, index) => {
                return (
                  <tr
                    key={cliente.cpf}
                    className={`${index % 2 == 0 ? 'bg-white text-[#5DC5F1]' : 'bg-[#5DC5F1] text-white'}`}
                  >
                    <td className="px-1 md:px-3 lg:px-8">{cliente.cpf}</td>
                    <td
                      className={`${
                        index % 2 == 0 ? 'border-[#8ac9e3]' : 'border-[#0cb5fd]'
                      } px-1 border-x-2 md:px-3 lg:px-8`}
                    >
                      {cliente.nome}
                    </td>
                    <td className="px-1 md:px-3 lg:px-8">{formataStringData(cliente.data.split('T')[0])}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      )}
    </Layout>
  )
}
